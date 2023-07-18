import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/User.service';
import Swal from 'sweetalert2'; // Importa sweetalert2

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
      console.log(this.users);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  }

  onEditUser(userId: any) {
    this.router.navigate(['panelAdmin/Users', userId]); // Navegar a la ruta de edición con el ID del usuario
  }

  onDeleteUser(userId: string) {
    const userToDelete = this.users.find(user => user._id === userId);

    if (userToDelete) {
      // Mostrar el SweetAlert personalizado
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
      }).then((result) => {
        if (result.isConfirmed) {
          // Cambiar el valor de actived a false
          userToDelete.actived = false;
          window.location.reload()
          // Llamar al servicio para actualizar el usuario en el servidor
          this.userService.updateUser(userId, { actived: false })
            .then(() => {
              // Mostrar SweetAlert de éxito
              Swal.fire(
                '¡Eliminado!',
                'El usuario ha sido desactivado.',
                'success'
              );
            })
            .catch(error => {
              console.error('Error al desactivar el usuario:', error);
              // Mostrar SweetAlert de error
              Swal.fire(
                'Error',
                'Ocurrió un error al desactivar el usuario. Por favor, inténtalo nuevamente.',
                'error'
              );
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Si el usuario hace clic en Cancelar
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
