import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateTextService {
  private apiUrl = 'http://localhost:3001/images'; // La URL de tu API para las imágenes

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http.get<any>(this.apiUrl).toPromise()
      .then((texts: any[]) => {
        return texts.filter((vehicle: any) => vehicle.actived !== false);
      });
  }

  updateImage(imageId: any, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${imageId}`;
    return this.http.put(url, updatedData); // Realiza una solicitud PATCH al backend para actualizar los datos de la imagen
  }
}
