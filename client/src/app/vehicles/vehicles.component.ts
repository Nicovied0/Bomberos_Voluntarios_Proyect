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

  //  mostrar directamente en pagina
  ngOnInit() {
    this.vehicleService.getVehicles().then((results) => {
      this.vehicles = results;
      console.log(this.vehicles);

      this.sortVehiclesByMobileNumber(); // Llamada al método para ordenar los vehículos
    }).catch((error) => {
      console.error('Error al obtener los repositorios', error);
    });
  }

  sortVehiclesByMobileNumber() {
    this.vehicles.sort((a:any, b:any) => {
      return a.movilNumber - b.movilNumber; // Orden ascendente
      // Si deseas orden descendente, cambia la línea anterior por:
      // return b.movilNumber - a.movilNumber;
    });
  }


  verDetalle(_id: any) {
    console.log(_id)
    this.router.navigate(['/moviles', _id]);
  }
}
