import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent {
  @Input() vehicle: any;
  constructor(private authService: AuthService, private route: ActivatedRoute, private vehicleService: VehicleService, private router: Router) { }
  public vehicleId: any;
  public userLoged: boolean = false

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const vehicleId = params.get('id');
      if (vehicleId) {
        this.getVehicle(vehicleId);
      }
    });
    this.userVerify()
  }

  getVehicle(id: any) {
    this.vehicleService.getVehiclesById(id)
      .then(vehicle => {
        console.log(vehicle);
        this.vehicleId = vehicle;

      })
      .catch(error => {
        console.error(error);
      });
  }
  formatFecha(fecha: string): string {
    const date = new Date(fecha);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
  }

  goUpdate(id: any) {
    this.router.navigate(['/panelAdmin/Vehicles/maintenance', id])
  }
  goInfo(id: any) {
    this.router.navigate(['moviles/Adicional', id])
  }

  userVerify() {
    this.userLoged = this.authService.adminUser()
  }

}
