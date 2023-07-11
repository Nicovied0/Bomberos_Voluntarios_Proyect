import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/Profile.service';
import { CloudinaryService } from '../Services/Cloudinary.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public profileData = {
    name: '',
    email: '',
    imagen: '',
    number: ''
  };
  selectedImage: string | null = null;

  public selectedFile: File | null = null;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private cloudinaryService: CloudinaryService
  ) {}

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    const profile = localStorage.getItem('profile');
    if (profile) {
      this.profileData = JSON.parse(profile);
    }
  }

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
    const file = event.target.files[0];
    // Realiza cualquier lógica necesaria para procesar el archivo (subirlo, etc.)
    // ...
    // Luego, asigna la URL de la imagen seleccionada a selectedImage
    this.selectedImage = URL.createObjectURL(file);
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.cloudinaryService.uploadImage(formData).subscribe(
        (response: any) => {
          if (response.url) {
            this.profileData.imagen = response.url;
          } else {
            console.log('No se pudo obtener el enlace de la imagen');
          }
        },
        error => {
          console.log('Error al cargar la imagen', error);
        }
      );
    }
  }

  submitForm() {
    this.profileService.updateProfileData(this.profileData).subscribe(
      (response: any) => {
        if (response.profile) {
          const updatedProfile = response.profile;
          localStorage.setItem('profile', JSON.stringify(updatedProfile));
          this.router.navigate(['/perfil']);
        } else {
          console.log('No se pudo actualizar el perfil');
        }
      },
      error => {
        console.log('Error al actualizar el perfil', error);
      }
    );
  }
}
