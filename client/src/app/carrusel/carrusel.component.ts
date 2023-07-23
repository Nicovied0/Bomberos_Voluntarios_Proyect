import { Component } from '@angular/core';
// import Img from '../../assets/imgCarrusel1.png'

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images = [
    { url: 'https://i.imgur.com/tDlggdI.png', title: 'Bomberos Santa Catalina', description: '' },
    { url: 'https://i.imgur.com/eHcUzN6.jpeg', title: 'Correo Para Aspirantes', description: 'email.ejemplo@gmail.com' },
    { url: 'https://i.imgur.com/HyQChy5.jpeg', title: 'Nuestras redes sociales', description: `Si querés enterarte de las últimas noticias al instante, puedes seguirnos o darle 'Me Gusta' a nuestra página de  Facebook . También, si quieres ver más contenido fotográfico, nos puedes buscar en   Instagram` },
  ];
}
