import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';
import Swal from 'sweetalert2'; // Importa sweetalert2

@Component({
  selector: 'app-admin-movil',
  templateUrl: './admin-movil.component.html',
  styleUrls: ['./admin-movil.component.css']
})
export class AdminMovilComponent implements OnInit {
  constructor(private router: Router, private vehicleService: VehicleService) { }

  vehicles: any[] = [];

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
    this.vehicles.sort((a: any, b: any) => {
      return a.movilNumber - b.movilNumber; // Orden ascendente
      // Si deseas orden descendente, cambia la línea anterior por:
      // return b.movilNumber - a.movilNumber;
    });
  }
  goEdit(_id: any) {
    this.router.navigate(['panelAdmin/Vehicles', _id])
  }
  goUpload(_id: any) {
    this.router.navigate(['panelAdmin/Vehicles', _id])
  }

}
