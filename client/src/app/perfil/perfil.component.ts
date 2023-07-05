import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public loged = false

  constructor(private router: Router) { }


  goRegister() {
    this.router.navigate(['/login'])
  }


  ngOnInit() {
    this.getUser()

  }

  getUser() {
    const token = localStorage.getItem('token');

    if (token) {
      console.log('Token encontrado:', token);
      this.loged = true
    } else {
      console.log('No se encontró un token');
      this.loged = false
      this.router.navigate(['/login'])
    }

  }
}
