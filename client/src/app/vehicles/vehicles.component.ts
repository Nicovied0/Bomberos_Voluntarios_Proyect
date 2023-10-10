import { Component } from '@angular/core';
import { VehicleService } from '../Services/Vehicles.service';
import { Router } from '@angular/router';
declare const Swal: any;

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  constructor(private vehicleService: VehicleService, private router: Router) { }

  public vehicles: any = []
  public activeVehicles: boolean = false

  ngOnInit() {
    this.vehicleService.getVehicles().then((results) => {
      this.vehicles = results;
      this.sortVehiclesByMobileNumber();
    }).catch((error) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast: any) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'No se encontraron los vehículos'
      })
    });
  }

  sortVehiclesByMobileNumber() {
    this.vehicles.sort((a: any, b: any) => {
      return a.movilNumber - b.movilNumber;
    });
  }


  verDetalle(_id: any) {
    console.log(_id)
    this.router.navigate(['/moviles', _id]).then(() => {
      window.scrollTo(0, 0);
    });;
  }
}
