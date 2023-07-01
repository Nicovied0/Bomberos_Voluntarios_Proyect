import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../Services/Vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent {
  @Input() vehicle: any;
  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private router: Router) { }
  public vehicleId: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.getVehicle(productId);
      }
    });
  }

  getVehicle(id: string) {
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
