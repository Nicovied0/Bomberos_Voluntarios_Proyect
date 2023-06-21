import { Component } from '@angular/core';
// import Img from '../../assets/imgCarrusel1.png'

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images = [
    { url: '../../assets/CARTEL.png', title: 'Producto 1', description: 'Descripción del producto 1' },
    { url: '../../assets/CARTEL3.jpg', title: 'Correo Para Aspirantes', description: 'email.ejemplo@gmail.com' },
    { url: '../../assets/CARTEL4.jpg', title: 'Correo Para Aspirantes', description: 'email.ejemplo@gmail.com' },
  ];
}
