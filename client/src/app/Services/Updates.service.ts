import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UpdatesService {
  private apiUrl = 'http://localhost:3001/vehicles';

  constructor(private http: HttpClient) { }

  async postUpdate(data: any, updateType: string, id: string): Promise<any> {
    let url = this.apiUrl + `/${id}`;

    switch (updateType) {
      case 'maintenance':
        url += '/maintenance';
        break;
      case 'battery-change':
        url += '/battery-change';
        break;
      case 'recharge':
        url += '/recharge';
        break;
      case 'service-programed':
        url += '/service-programed';
        break;
      default:
        throw new Error(`Tipo de actualización no válido: ${updateType}`);
    }

    console.log(url, data);

    try {
      const response = await this.http.post<any>(url, data).toPromise();
      console.log('Respuesta del servidor:', response);
      return response;
    } catch (error) {
      console.log('Error:', error);
    }
  }


}
