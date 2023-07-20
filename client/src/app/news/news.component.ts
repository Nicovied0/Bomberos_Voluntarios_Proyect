import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/Post.service';
import { Publicacion } from '../Services/publicacion.inteface';
import { DomSanitizer,SafeHtml  } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  iframeLink300 = "";
  iframeLink400 = "";
  iframeLink500 = "";

  constructor(private postService: PostService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getPublicaciones();
  }


  getPublicaciones() {
    this.postService.obtenerPublicaciones().subscribe(
      (publicaciones: Publicacion[]) => {
        this.publicaciones = publicaciones;
        if (publicaciones.length > 0) {
          // Asignar los valores según los objetos en el arreglo publicaciones
          this.iframeLink300 = this.removeBackslashes(publicaciones[0]?.iframeLink300 || '');
          this.iframeLink400 = this.removeBackslashes(publicaciones[0]?.iframeLink400 || '');
          this.iframeLink500 = this.removeBackslashes(publicaciones[0]?.iframeLink500 || '');
        } else {
          // Si no hay publicaciones, establecer los enlaces en vacío
          this.iframeLink300 = '';
          this.iframeLink400 = '';
          this.iframeLink500 = '';
        }
        console.log(publicaciones);
      },
      (error) => {
        console.error('Error al obtener las publicaciones:', error);
      }
    );
  }

  // Método para quitar las barras invertidas de un texto
  removeBackslashes(text: string): string {
    return text.replace(/\\/g, '');
  }

  getSafeIframeUrl(iframeLink: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iframeLink);
  }
}
