import { Component, OnInit } from '@angular/core';
import { UpdateTextService } from '../Services/UpdateText.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  images: any[] = [];
  imagesLoaded: boolean = false;

  constructor(private updateTextService: UpdateTextService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imagesLoaded = false; // Mostrar el indicador de carga
    this.updateTextService.getImage().then((images) => {
      this.images = images;
      this.imagesLoaded = true; // Ocultar el indicador de carga cuando las imágenes se cargan
    }).catch((error) => {
      console.error('Error al obtener las imágenes', error);
      this.imagesLoaded = true; // Asegurarse de ocultar el indicador de carga en caso de error
    });
  }
}
