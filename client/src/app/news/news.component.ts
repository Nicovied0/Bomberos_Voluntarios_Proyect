import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/Post.service';
import { Publicacion } from '../Services/publicacion.inteface';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  iframeWidth: number = 500; // Valor inicial del ancho del iframe

  constructor(private postService: PostService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getPublicaciones();
  }

  getPublicaciones() {
    this.postService.obtenerPublicaciones().subscribe(
      (publicaciones: Publicacion[]) => {
        this.publicaciones = publicaciones;

      },
      (error) => {
        console.error('Error al obtener las publicaciones:', error);
      }
    );
  }

}
