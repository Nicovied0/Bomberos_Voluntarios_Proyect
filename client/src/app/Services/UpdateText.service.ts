import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateTextService {
  private apiUrl = 'https://bvscback.vercel.app/images'; // La URL de tu API para las imágenes

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http.get<any>(this.apiUrl).toPromise()
      .then((texts: any[]) => {
        return texts.filter((vehicle: any) => vehicle.actived !== false);
      });
  }

  getImageById(id: any) {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<any>(url).toPromise()
      .then((text: any) => {
        if (text) {
          return text
        } else {
          return null
        }
      });
  }

  updateImage(imageId: any, updatedData: any): Observable<any> {
    console.log(imageId)
    console.log(updatedData)
    const url = `https://bvscback.vercel.app/images/${imageId}`;
    return this.http.put(url, updatedData);
  }

}
