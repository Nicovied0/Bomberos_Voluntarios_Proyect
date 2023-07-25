import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateTextService } from '../Services/UpdateText.service';

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
  text: any | null;

  ngOnInit() {
    // Obtener el ID del usuario desde el parámetro de la ruta
    this.textId = this.route.snapshot.paramMap.get('id');

    // Obtener la información del usuario específico
    this.getTextDetails();

  }

  async getTextDetails() {
    try {
      const userResponse = await this.updateTextService.getImageById(this.textId!);
      this.text = userResponse as any;
      console.log(this.text)
    } catch (error) {
      console.error('Error al obtener los detalles del texto:', error);
    }
  }


}
