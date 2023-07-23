import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/User.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-users-edit',
  templateUrl: './admin-users-edit.component.html',
  styleUrls: ['./admin-users-edit.component.css']
})
export class AdminUsersEditComponent implements OnInit {
  userId: string | null = null;
  user: any | null;
  possibleRoles = ["publico", "bombero", "administrador", "editor"];
  myUser: any | null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserDetails();
    this.getMyUser()
  }

  canEditRole(): boolean {
    return this.myUser.role === 'administrador' || this.myUser.role === 'editor';
  }

  async getUserDetails() {
    try {
      const userResponse = await this.userService.getUsersId(this.userId!);
      this.user = userResponse as any;
    } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
    }
  }

  async onSaveChanges() {
    try {
      // Aquí implementa la lógica para guardar los cambios del usuario
      await this.userService.updateUser(this.userId!, this.user);
      console.log('Cambios guardados correctamente.');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu actualizacion fue cargada',
        showConfirmButton: false,
        timer: 1300
      })
      // Después de guardar los cambios, puedes redirigir al usuario a la página de lista de usuarios
      this.router.navigate(['/panelAdmin/Users']);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  }

  getMyUser() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')
    console.log(usuarioLogeado.role)
    this.myUser = usuarioLogeado.role
  }
}

