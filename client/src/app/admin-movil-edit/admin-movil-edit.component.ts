import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';

@Component({
  selector: 'app-admin-movil-edit',
  templateUrl: './admin-movil-edit.component.html',
  styleUrls: ['./admin-movil-edit.component.css']
})
export class AdminMovilEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) { }
  movilId: string | null = null;
  movil: any | null;

  ngOnInit() {
    // Obtener el ID del usuario desde el parámetro de la ruta
    this.movilId = this.route.snapshot.paramMap.get('id');
    // Obtener la información del usuario específico
    this.getVehicleDetails();

  }

  async getVehicleDetails() {
    try {
      const userResponse = await this.vehicleService.getVehiclesById(this.movilId!);
      this.movil = userResponse as any;
      console.log(this.movil)
    } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
    }
  }

}
