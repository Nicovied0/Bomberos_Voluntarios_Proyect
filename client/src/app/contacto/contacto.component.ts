import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
    // Realizar la solicitud POST al servidor
    this.http.post('http://localhost:3001/email', this.formData).subscribe(
      (response) => {
        // Mostrar una alerta de SweetAlert para agradecer el envío del email
        Swal.fire({
          title: '¡Gracias!',
          text: `Hemos recibido tu mensaje, ${this.formData.nombre}. Te responderemos a la brevedad.`,
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
        console.log(response)
        // Limpiar los campos del formulario después del envío
        this.formData = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        };

      },
      (error) => {
        console.error('Error al enviar el correo', error);

        // Mostrar una alerta de SweetAlert en caso de error
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
