import { Component, OnInit, HostListener } from '@angular/core';
import { PostService } from '../Services/Post.service';
import { Publicacion } from '../Services/publicacion.inteface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
  constructor(private router: Router, private postService: PostService, private sanitizer: DomSanitizer) { }

  publicaciones: Publicacion[] = [];
  private desplazamiento = 0;
  private publicacionesPorPagina = 3; // Cantidad de publicaciones a obtener por página

  ngOnInit() {
    this.getMorePublicaciones();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Calcula la posición del marcador de scroll
    const scrollMarkerPosition = document.querySelector('.scroll-marker')?.getBoundingClientRect().top || 0;
    const windowHeight = window.innerHeight;

    // Si el marcador de scroll está visible en la ventana actual, carga más publicaciones
    if (scrollMarkerPosition <= windowHeight) {
      this.getMorePublicaciones();
    }
  }

  getMorePublicaciones() {
    // Llama al servicio para obtener las siguientes publicaciones con el desplazamiento actual
    this.postService.obtenerPublicaciones(this.desplazamiento, this.publicacionesPorPagina).subscribe(
      (publicaciones: Publicacion[]) => {
        if (publicaciones.length > 0) {
          // Si se obtuvieron nuevas publicaciones, actualiza el desplazamiento para la próxima llamada
          this.desplazamiento += publicaciones.length;

          // Agrega las nuevas publicaciones al arreglo existente
          this.publicaciones.push(...publicaciones);
        }
      },
      (error) => {
        console.error('Error al obtener las siguientes publicaciones:', error);
      }
    );
  }

  getSafeIframeUrl(iframeLink: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iframeLink);
  }

  goNew() {
    this.router.navigate(['/panelAdmin/NewPost']);
  }

  eliminarPublicacion(publicacionId: string) {
    this.postService.eliminarPublicacion(publicacionId).subscribe(
      () => {
        // Eliminar la publicación del array de publicaciones
        this.publicaciones = this.publicaciones.filter((publicacion) => publicacion._id !== publicacionId);
        Swal.fire('Éxito', 'La publicación ha sido eliminada exitosamente.', 'success');
      },
      (error) => {
        console.error('Error al eliminar la publicación:', error);
        Swal.fire('Error', 'Ha ocurrido un error al eliminar la publicación.', 'error');
      }
    );
  }
}
