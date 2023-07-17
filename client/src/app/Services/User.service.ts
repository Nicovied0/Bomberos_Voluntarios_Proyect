import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async getUsers() {
    const url = `http://localhost:3001/users`
    return this.http.get<any>(url).toPromise()
      .then((users: any[]) => {
        return users.filter((users: any) => users.actived !== false);
      });
  }

  async getUsersId(id: string) {
    const url = `http://localhost:3001/users/${id}`;
    try {
      const userResponse = await this.http.get<any>(url).toPromise();
      if (userResponse && userResponse.actived !== false) {
        return userResponse;
      } else {
        throw new Error('Usuario no encontrado o inactivo.');
      }
    } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
      throw error;
    }
  }

  async updateUser(id: string, userData: any) {
    const url = `http://localhost:3001/users/${id}`;
    return this.http.put(url, userData).toPromise();
  }


}
