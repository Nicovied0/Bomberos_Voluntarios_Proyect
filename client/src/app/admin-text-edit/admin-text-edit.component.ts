import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateTextService } from '../Services/UpdateText.service';
declare const Swal: any;


@Component({
  selector: 'app-admin-text-edit',
  templateUrl: './admin-text-edit.component.html',
  styleUrls: ['./admin-text-edit.component.css']
})
export class AdminTextEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private updateTextService: UpdateTextService
  ) { }

  textId: any | null = null;
  public text = {
    _id: '',
    url: '',
    title: '',
    description: ''
  };

  ngOnInit() {
    this.textId = this.route.snapshot.paramMap.get('id');
    this.getTextDetails();
  }

  async getTextDetails() {
    try {
      const userResponse = await this.updateTextService.getImageById(this.textId!);
      this.text = userResponse as any;
      console.log(this.text);
    } catch (error) {
      console.error('Error al obtener los detalles del texto:', error);
    }
  }

  goBack() {
    this.router.navigate(['/panelAdmin/Texts']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  updateText() {
    if (this.text) {
      this.updateTextService.updateImage(this.textId, this.text).subscribe(
        (response) => {
          console.log('Texto actualizado correctamente:', response);
          Swal.fire({
            icon: 'success',
            title: 'Texto actualizado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            this.router.navigate(['/']).then(() => {
              window.scrollTo(0, 0);
            });
          }, 1500);
          // Actualizar el objeto 'text' con los nuevos valores del formulario.
          this.text.title = response.title;
          this.text.description = response.description;
        },
        (error) => {
          console.error('Error al actualizar el texto:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error al actualizar el texto',
            text: 'Hubo un problema al intentar actualizar el texto.',
            confirmButtonText: 'Cerrar'
          });
        }
      );
    }
  }
}

