import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.css']
})
export class VehicleInformationComponent {
  public vehicleId: any; // Declaración explícita de tipo 'any'
  public showLastMaintenance: boolean = false;
  public showAllMaintenances: boolean = false;
  public sortedMaintenances: any[] = [];

  public showAllBatteryChanges: boolean = false;
  public sortedBatteryChanges: any[] = [];

  public showAllRecharges: boolean = false;
  public sortedRecharges: any[] = [];

  public showAllServiceProgramed: boolean = false;
  public sortedServiceProgramed: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) { }

  @Input() vehicle: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const vehicleId = params.get('id');
      if (vehicleId) {
        this.getVehicle(vehicleId);
      }
    });
  }
  goBack(id:any) {
    this.router.navigate(['moviles/',id])
  }
  getVehicle(id: any) {
    this.vehicleService
      .getVehiclesById(id)
      .then((vehicle) => {
        console.log(vehicle);
        this.vehicleId = vehicle;
        this.sortMaintenancesByDate(); // Ordenar mantenimientos por fecha después de obtener el vehículo
        this.sortBatteryChangesByDate(); // Ordenar cambios de batería por fecha después de obtener el vehículo
        this.sortRechargesByDate(); // Ordenar recargas por fecha después de obtener el vehículo
        this.sortServiceProgramedByDate(); // Ordenar servicios programados por fecha después de obtener el vehículo
      })
      .catch((error) => {
        console.error(error);
      });
  }

  isAllMantenimientosEmpty(): boolean {
    // Verificar si todas las listas de mantenimientos están vacías
    return (
      this.vehicleId.lastBatteryChange.length === 0 &&
      this.vehicleId.lastMaintenance.length === 0 &&
      this.vehicleId.lastRecharge.length === 0 &&
      this.vehicleId.lastServiceProgramed.length === 0
    );
  }

  toggleLastMaintenance() {
    this.showAllMaintenances = !this.showAllMaintenances;
    console.log(this.showLastMaintenance)
  }

  getLastMaintenance() {
    return this.vehicleId.lastMaintenance.length > 0 ? this.vehicleId.lastMaintenance[0] : null;
  }

  toggleShowAllMaintenances() {
    this.showAllMaintenances = !this.showAllMaintenances;

  }

  toggleLastBatteryChange() {
    this.showAllBatteryChanges = !this.showAllBatteryChanges;
  }

  toggleLastRecharge() {
    this.showAllRecharges = !this.showAllRecharges;
  }

  toggleLastServiceProgramed() {
    this.showAllServiceProgramed = !this.showAllServiceProgramed;
  }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  sortMaintenancesByDate(): void {
    this.sortedMaintenances = [...this.vehicleId.lastMaintenance].sort((a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }

  sortBatteryChangesByDate(): void {
    this.sortedBatteryChanges = [...this.vehicleId.lastBatteryChange].sort((a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }

  sortRechargesByDate(): void {
    this.sortedRecharges = [...this.vehicleId.lastRecharge].sort((a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }

  sortServiceProgramedByDate(): void {
    this.sortedServiceProgramed = [...this.vehicleId.lastServiceProgramed].sort((a, b) =>
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }
}
