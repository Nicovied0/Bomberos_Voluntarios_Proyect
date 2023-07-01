import { Component } from '@angular/core';
import { VehicleService } from '../Services/Vehicles.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  constructor(private vehicleService: VehicleService, private router: Router) { }

  public vehicles: any = []
  public activeVehicles: boolean = false




  // seeVehicles() {
  //   this.activeVehicles = !this.activeVehicles
  //   this.vehicleService.getVehicles().then((results) => {
  //     this.vehicles = results
  //     console.log(this.vehicles)
  //   }).catch((error) => {
  //     console.error('Error al obtener los repositorios', error);
  //   })
  // }

  //  mostrar directamente en pagina
  ngOnInit() {
    this.vehicleService.getVehicles().then((results) => {
      this.vehicles = results
      console.log(this.vehicles)

    }).catch((error) => {
      console.error('Error al obtener los repositorios', error);
    })
  }

  verDetalle(id: number) {
    console.log(id)
    this.router.navigate(['/producto', id]);
  }
}
