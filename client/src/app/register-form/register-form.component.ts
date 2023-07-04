import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';

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
  
  constructor(private authService: AuthService) { }


  onSubmit() {

  }
}
