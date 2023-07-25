import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateTextService {
  private apiUrl = '/api/images'; // La URL de tu API para las imágenes

  constructor(private http: HttpClient) { }

  updateImage(imageId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${imageId}`;
    return this.http.patch(url, updatedData); // Realiza una solicitud PATCH al backend para actualizar los datos de la imagen
  }
}
