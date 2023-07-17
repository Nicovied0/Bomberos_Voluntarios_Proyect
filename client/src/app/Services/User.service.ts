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

  async getUsersId(id: any) {
    const url = `http://localhost:3001/users/${id}`;
    return this.http.get<any>(url).toPromise()
      .then((user: any) => {
        if (user && user.actived !== false) {
          return user;
        } else {
          throw new Error('Usuario no encontrado o inactivo.');
        }
      });
  }

}
