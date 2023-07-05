import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  private loged = false

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
      this.loged = true
    }

  }
}
