import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles() {
    const url = `http://localhost:3001/vehicles`
    return this.http.get<any>(url).toPromise()
      .then((vehicle: any[]) => {
        return vehicle.filter((vehicle: any) => vehicle.actived !== false);
      });
  }
}
