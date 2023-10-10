import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';
import { UpdatesService } from '../Services/Updates.service';
declare const Swal: any;

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
  selectedMaintenanceType: string = 'maintenance';

  fecha: string = '';
  descripcion: string = '';

  ngOnInit() {
    this.movilId = this.route.snapshot.paramMap.get('id');
    this.getVehicleDetails();
  }

  goBack(id: any) {
    this.router.navigate(['moviles/', id]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  async getVehicleDetails() {
    try {
      const userResponse = await this.vehicleService.getVehiclesById(this.movilId!);
      this.movil = userResponse as any;
    } catch (error) {
      console.error('Error al obtener los detalles del vehículo:', error);
    }
  }

  async addMaintenance() {
    const fecha = this.fecha;
    const descripcion = this.descripcion;

    const data = { fecha, descripcion };
    const updateType = this.selectedMaintenanceType.toLowerCase().replace(' ', '-');

    try {
      await this.updatesService.postUpdate(data, updateType, this.movilId!);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu actualizacion fue cargada',
        showConfirmButton: false,
        timer: 1300
      })
      this.router.navigate(['/moviles', this.movilId]).then(() => {
        window.scrollTo(0, 0);
      });
    } catch (error) {
      console.error('Error al agregar el mantenimiento:', error);
    }
  }
}
