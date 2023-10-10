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
  lastBatteryChange: any[] = [];
  lastMaintenance: any[] = [];
  lastRecharge: any[] = [];
  lastServiceProgramed: any[] = [];


  ngOnInit() {
    this.movilId = this.route.snapshot.paramMap.get('id');
    this.getVehicleDetails();

  }

  async getVehicleDetails() {
    try {
      const userResponse = await this.vehicleService.getVehiclesById(this.movilId!);
      this.movil = userResponse as any;

      if (this.movil) {
        this.lastBatteryChange = this.movil.lastBatteryChange;
        this.lastMaintenance = this.movil.lastMaintenance;
        this.lastRecharge = this.movil.lastRecharge;
        this.lastServiceProgramed = this.movil.lastServiceProgramed;

      }
    } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
    }
  }

  async onDeleteMaintenance(vehicleId: string, maintenanceId: string) {
    try {
      await this.vehicleService.deleteMaintenance(vehicleId, maintenanceId);
      window.location.reload()
    } catch (error) {
      console.error('Error al eliminar el mantenimiento:', error);
    }
  }

}
