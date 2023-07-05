import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public loged = false;

  constructor(private router: Router, private authService: AuthService, private profileService: ProfileService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    const token = localStorage.getItem('token');

    if (token) {
      const profile = localStorage.getItem('profile');

      if (profile) {
        console.log('Perfil encontrado en el localStorage:', JSON.parse(profile));
        this.loged = true;
      } else {
        // Realizar la solicitud para obtener el perfil
        this.profileService.getProfile().subscribe(
          (response: any) => {
            if (response.profile) {
              const userProfile = response.profile;
              localStorage.setItem('profile', JSON.stringify(userProfile));
              console.log('Perfil obtenido:', userProfile);
              this.loged = true;
            } else {
              console.log('No se pudo obtener el perfil');
              this.loged = false;
              this.router.navigate(['/login']);
            }
          },
          error => {
            console.log('Error al obtener el perfil', error);
            this.loged = false;
            this.router.navigate(['/login']);
          }
        );
      }
    } else {
      console.log('No se encontró un token');
      this.loged = false;
      this.router.navigate(['/login']);
    }
  }
}
