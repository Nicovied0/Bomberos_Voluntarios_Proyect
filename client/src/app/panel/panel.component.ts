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
    this.router.navigate(['/panelAdmin/Posts'])
  }
  goUsers() {
    this.router.navigate(['/panelAdmin/Users'])
  }
  goMovil() {
    this.router.navigate(['/panelAdmin/Vehicles'])
  }

  getMyUser() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')
    console.log(usuarioLogeado.role)
    this.myUser = usuarioLogeado.role
  }


}
