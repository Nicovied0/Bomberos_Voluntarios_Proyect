import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  constructor(private router: Router, private authService: AuthService) { }
  myUser: any | null


  ngOnInit() {
    this.getMyUser()
  }

  goNewPost() {
    this.router.navigate(['/panelAdmin/Posts']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goUsers() {
    this.router.navigate(['/panelAdmin/Users']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goMovil() {
    this.router.navigate(['/panelAdmin/Vehicles']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  geText() {
    this.router.navigate(['/panelAdmin/Texts']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  getMyUser() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')
    this.myUser = usuarioLogeado.role
  }


}
