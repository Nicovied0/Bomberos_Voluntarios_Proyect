import { Component } from '@angular/core';
import { AuthService, LoginResponse } from '../Services/Auth.service';
import { Router } from '@angular/router';
declare const Swal: any;


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
    this.router.navigate(['/register']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  onSubmit() {
    this.authService.login(this.formData.email, this.formData.password)
      .subscribe(
        (response: LoginResponse) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            Swal.fire({
              title: "Inicio de Sesión Exitoso",
              text: "¡Has iniciado sesión correctamente!",
              icon: 'success',
              timer: 3000,
              showConfirmButton: false
            });

            this.router.navigate(['/perfil']);
          }
        },
        (error) => {
          Swal.fire({
            title: 'Error en el Inicio de Sesión',
            text: 'Correo electrónico o contraseña inválidos. Por favor, inténtalo de nuevo.',
            icon: 'error',
            showConfirmButton: true
          });
        }

      );
  }
}
