import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  public profileData = {
    name: '',
    email: '',
    imagen: ''
  }

  constructor(private router: Router, private profileService: ProfileService) { }

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
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.profileData.imagen = e.target.result;
    };

    reader.readAsDataURL(file);
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
