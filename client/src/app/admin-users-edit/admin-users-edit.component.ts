import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/User.service';
declare const Swal: any;

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
      await this.userService.updateUser(this.userId!, this.user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu actualizacion fue cargada',
        showConfirmButton: false,
        timer: 1300
      })
      this.router.navigate(['/panelAdmin/Users']).then(() => {
        window.scrollTo(0, 0);
      });
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  }

  getMyUser() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')
    this.myUser = usuarioLogeado.role
  }
}

