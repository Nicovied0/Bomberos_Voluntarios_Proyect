import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private authService: AuthService, private router: Router) { }

  goLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
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
