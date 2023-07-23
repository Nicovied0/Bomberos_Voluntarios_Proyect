import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';
import { UpdatesService } from '../Services/Updates.service';

@Component({
  selector: 'app-admin-movil-edit-maintenance',
  templateUrl: './admin-movil-edit-maintenance.component.html',
  styleUrls: ['./admin-movil-edit-maintenance.component.css']
})
export class AdminMovilEditMaintenanceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private updatesService: UpdatesService
  ) { }

  movilId: string | null = null;
  movil: any | null;
  selectedMaintenanceType: string = 'maintenance'; // Corrige el valor aquí

  fecha: string = ''; // Agrega la propiedad fecha
  descripcion: string = ''; // Agrega la propiedad descripcion

  ngOnInit() {
    this.movilId = this.route.snapshot.paramMap.get('id');
    this.getVehicleDetails();
  }

  async getVehicleDetails() {
    try {
      const userResponse = await this.vehicleService.getVehiclesById(this.movilId!);
      this.movil = userResponse as any;
      console.log('Detalles del vehículo:', this.movil);
    } catch (error) {
      console.error('Error al obtener los detalles del vehículo:', error);
    }
  }

  async addMaintenance() {
    // Obtén la fecha y descripción del input
    const fecha = this.fecha;
    const descripcion = this.descripcion;

    console.log('Fecha:', fecha);
    console.log('Descripción:', descripcion);

    const data = { fecha, descripcion };
    const updateType = this.selectedMaintenanceType.toLowerCase().replace(' ', '-');

    console.log('Data:', data);
    console.log('UpdateType:', updateType);

    try {
      await this.updatesService.postUpdate(data, updateType, this.movilId!);
      console.log('Mantenimiento agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar el mantenimiento:', error);
    }
  }
} 
