import { Component } from '@angular/core';
import { VehicleService } from '../Services/Vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  constructor(private vehicleService: VehicleService) { }

  public vehicles: any = []


  ngOnInit() {
    this.vehicleService.getVehicles().then((results) => {
      this.vehicles = results
      console.log(this.vehicles)


    }).catch((error) => {
      console.error('Error al obtener los repositorios', error);
    })
  }
}
