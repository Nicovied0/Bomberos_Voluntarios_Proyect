import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.css']
})
export class VehicleInformationComponent {

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private router: Router) { }
  @Input() vehicle: any;
  public vehicleId: any;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const vehicleId = params.get('id');
      if (vehicleId) {
        this.getVehicle(vehicleId);
      }
    });
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
}
