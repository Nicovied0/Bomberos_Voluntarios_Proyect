import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';
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
  this.router.navigate(['/login'])
}

onSubmit() {
  this.authService.register(this.formData.name, this.formData.email, this.formData.password)
    .subscribe(
      response => {
        console.log('Registro exitoso');
        // Aquí puedes redirigir a otra página o mostrar un mensaje de éxito
      },
      error => {
        console.log('Error en el registro', error);
        // Aquí puedes mostrar un mensaje de error o manejar el error de otra forma
      }
    );
}
}
