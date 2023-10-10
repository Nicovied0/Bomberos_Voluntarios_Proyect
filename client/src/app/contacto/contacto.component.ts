import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const Swal: any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  formData = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('https://bvscback.vercel.app/email', this.formData).subscribe(
      (response) => {
        Swal.fire({
          title: '¡Gracias!',
          text: `Hemos recibido tu mensaje, ${this.formData.nombre}. Te responderemos a la brevedad.`,
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
        this.formData = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        };

      },
      (error) => {
        console.error('Error al enviar el correo', error);
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
          icon: 'error',
          showConfirmButton: true
        });
      }
    );
  }
}
