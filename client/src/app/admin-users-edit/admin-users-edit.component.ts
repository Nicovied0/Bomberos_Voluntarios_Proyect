import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-admin-users-edit',
  templateUrl: './admin-users-edit.component.html',
  styleUrls: ['./admin-users-edit.component.css']
})
export class AdminUsersEditComponent implements OnInit {
  userId: string | null = null;
  user: any | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    // Obtener el ID del usuario desde el parámetro de la ruta
    this.userId = this.route.snapshot.paramMap.get('id');
    // Obtener la información del usuario específico
    this.getUserDetails();
  }

  async getUserDetails() {
    try {
      const userResponse = await this.userService.getUsersId(this.userId!);
      this.user = userResponse as any;
    } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
    }
  }

  onSaveChanges() {
    // Lógica para guardar los cambios del usuario
  }
}
