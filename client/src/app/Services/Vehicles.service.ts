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
  deleteMaintenance(vehicleId: string, maintenanceId: string) {
    // const url = `https://bvscback.vercel.app/vehicles/${vehicleId}/maintenance/${maintenanceId}`;
    const url = `http://localhost:3001/vehicles/${vehicleId}/maintenance/${maintenanceId}`
    return this.http.delete(url).toPromise();
  }

}
