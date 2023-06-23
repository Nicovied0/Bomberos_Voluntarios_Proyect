import { Component } from '@angular/core';
// import Img from '../../assets/imgCarrusel1.png'

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images = [
    { url: '../../assets/CARTEL.png', title: 'Inscripciones', description: 'Descripción de inscripciones' },
    { url: '../../assets/CARTEL3.jpg', title: 'Correo Para Aspirantes', description: 'email.ejemplo@gmail.com' },
    { url: '../../assets/CARTEL4.jpg', title: 'Correo Para Aspirantes', description: 'email.ejemplo@gmail.com' },
  ];
}