import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';
declare const Swal: any;


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
      this.sortVehiclesByMobileNumber();
    }).catch((error) => {
      console.error('Error al obtener los repositorios', error);
    });
  }

  sortVehiclesByMobileNumber() {
    this.vehicles.sort((a: any, b: any) => {
      return a.movilNumber - b.movilNumber;
    });
  }
  goEdit(_id: any) {
    this.router.navigate(['panelAdmin/Vehicles', _id]).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goUpload(_id: any) {
    this.router.navigate(['panelAdmin/Vehicles/maintenance', _id]).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
