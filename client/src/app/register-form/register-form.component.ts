import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  formData = {
    name: '',
    email: '',
    password: ''
  };

  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.formData.name, this.formData.email, this.formData.password)
      .subscribe(
        () => {
          this.authService.mostrarMensajeExito('Registro Exitoso', '¡Te has registrado correctamente!');
          // Puedes redirigir a otra página o mostrar un mensaje de éxito
        },
        (error) => {
          this.authService.mostrarMensajeError('Error en el Registro', 'Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.');
          // Puedes mostrar un mensaje de error o manejar el error de otra forma
        }
      );
  }
}
