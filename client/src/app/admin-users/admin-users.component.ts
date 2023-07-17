import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/User.service'; // Ajusta la ruta a tu UserService

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }
  users: any[] = [];


  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const usersResponse = await this.userService.getUsers();
      this.users = usersResponse as any[];
      console.log(this.users)
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  }

  onEditUser(userId: any) {
    this.router.navigate(['panelAdmin/Users', userId]); // Navegar a la ruta de edición con el ID del usuario
  }

  getActiveUsers() {
    return this.users.filter(user => user.actived === true);
  }
}
