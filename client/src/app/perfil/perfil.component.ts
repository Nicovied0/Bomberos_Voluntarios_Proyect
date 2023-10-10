import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  public loged = false;
  public profile: any = {};
  public goProfile = true;
  public profileLoged = false;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    const token = localStorage.getItem('token');
    if (token) {
      const profileData = localStorage.getItem('profile');

      if (profileData) {
        this.profile = JSON.parse(profileData);
        this.loged = true;
        this.profileLoged = true;
      } else {
        this.profileService.getProfile().subscribe(
          (response: any) => {
            if (response.profile) {
              const userProfile = response.profile;
              localStorage.setItem('profile', JSON.stringify(userProfile));
              this.loged = true;
              this.profileLoged = true;
            } else {
              this.loged = false;
              this.profileLoged = false;
              this.router.navigate(['/login']);
            }
            this.cdr.detectChanges();
          },
          error => {
            console.log('Error al obtener el perfil', error);
            this.loged = false;
            this.profileLoged = false;
            this.router.navigate(['/login']);
            this.cdr.detectChanges();
          }
        );
      }
    } else {
      this.loged = false;
      this.profileLoged = false;
      this.router.navigate(['/login']);
    }
  }

  getUser() {
    this.goProfile = false
    location.reload()
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    this.router.navigate(['/login']);
  }

  goEdit() {
    this.router.navigate(['/perfil/editar']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goDetails() {
    this.router.navigate(['/perfil/detalles']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goPanel() {
    this.router.navigate(['/panelAdmin']).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
