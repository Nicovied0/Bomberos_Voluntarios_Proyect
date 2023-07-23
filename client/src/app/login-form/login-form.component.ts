import { Component } from '@angular/core';
import { AuthService, LoginResponse } from '../Services/Auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  formData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  goRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    this.authService.login(this.formData.email, this.formData.password)
      .subscribe(
        (response: LoginResponse) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.authService.mostrarMensajeExito('Inicio de Sesión Exitoso', '¡Has iniciado sesión correctamente!');
            this.router.navigate(['/perfil']);
          }
        },
        (error) => {
          this.authService.mostrarMensajeError('Error en el Inicio de Sesión', 'Correo electrónico o contraseña inválidos. Por favor, inténtalo de nuevo.');
        }
      );
  }
}
