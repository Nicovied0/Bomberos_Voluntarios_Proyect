import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles() {
    const url = `https://bvscback.vercel.app/vehicles`
    return this.http.get<any>(url).toPromise()
      .then((vehicle: any[]) => {
        return vehicle.filter((vehicle: any) => vehicle.actived !== false);
      });
  }

  getVehiclesById(id: any) {
    const url = `https://bvscback.vercel.app/vehicles/${id}`
    return this.http.get<any>(url).toPromise()
      .then((vehicle: any) => {
        if (vehicle && vehicle.actived !== false) {
          return vehicle
        } else {
          return null
        }
      });

  }
}
