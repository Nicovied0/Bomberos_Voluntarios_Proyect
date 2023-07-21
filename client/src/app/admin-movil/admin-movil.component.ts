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
    this.getVehicles();
  }

  async getVehicles() {
    try {
      const usersResponse = await this.vehicleService.getVehicles();
      this.vehicles = usersResponse as any[];
      console.log(this.vehicles);
    } catch (error) {
      console.error('Error al obtener los vehicles:', error);
    }
  }

}
