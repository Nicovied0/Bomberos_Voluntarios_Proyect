import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/Post.service';
import { Publicacion } from '../Services/publicacion.inteface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  publicaciones: Publicacion[] = [];

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

  // Método para marcar el contenido del iframe como seguro
  sanitizeIframe(iframeLink: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iframeLink);
  }
}
