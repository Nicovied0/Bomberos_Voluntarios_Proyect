import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/User.service';
declare const Swal: any;


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
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  }

  onEditUser(userId: any) {
    this.router.navigate(['panelAdmin/Users', userId]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  onDeleteUser(userId: string) {
    const userToDelete = this.users.find(user => user._id === userId);
    if (userToDelete) {
      Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      }).fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
      }).then((result:any) => {
        if (result.isConfirmed) {
          userToDelete.actived = false;
          window.location.reload()
          this.userService.updateUser(userId, { actived: false })
            .then(() => {
              Swal.fire(
                '¡Eliminado!',
                'El usuario ha sido desactivado.',
                'success'
              );
            })
            .catch(error => {
              Swal.fire(
                'Error',
                'Ocurrió un error al desactivar el usuario. Por favor, inténtalo nuevamente.',
                'error'
              );
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'El usuario no ha sido desactivado.',
            'error'
          );
        }
      });
    }
  }
}
