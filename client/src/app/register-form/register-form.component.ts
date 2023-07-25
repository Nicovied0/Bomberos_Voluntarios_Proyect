import { Component } from '@angular/core';
import { AuthService, LoginResponse } from '../Services/Auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare const Swal: any;


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });
  }

  goLogin() {
    this.router.navigate(['/login']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  async onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    try {
      await this.authService.register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password).toPromise();

      // Mostrar SweetAlert de éxito
      Swal.fire({
        title: 'Registro Exitoso',
        text: '¡Te has registrado correctamente!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Autenticar al usuario automáticamente después del registro exitoso
        this.authService.login(this.registerForm.value.email, this.registerForm.value.password)
          .subscribe(
            (response: LoginResponse) => {
              if (response && response.token) {
                localStorage.setItem('token', response.token);
                console.log('Inicio de sesión automático exitoso');
                this.router.navigate(['/perfil']);
              }
            },
            (error) => {
              console.error('Error en el inicio de sesión automático', error);
            }
          );
      });
    } catch (error) {
      // Mostrar SweetAlert de error
      Swal.fire({
        title: 'Error en el Registro',
        text: 'Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}

