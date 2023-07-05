import { Component } from '@angular/core';
import { AuthService, LoginResponse } from '../Services/Auth.service';
import { Router } from '@angular/router';
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
    this.router.navigate(['/register'])
  }

  onSubmit() {
    this.authService.login(this.formData.email, this.formData.password)
      .subscribe(
        (response: LoginResponse) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            console.log('Inicio de sesión exitoso');
            this.router.navigate(['/perfil'])
          }
        },
        error => {
          console.log('Error en el inicio de sesión', error);
        }
      );
  }
}
