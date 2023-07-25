import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { NewsComponent } from './news/news.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { HistoryComponent } from './history/history.component';
import { MovilesComponent } from './moviles/moviles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { PanelComponent } from './panel/panel.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminUsersEditComponent } from './admin-users-edit/admin-users-edit.component';
import { AdminNewPostComponent } from './admin-new-post/admin-new-post.component';
import { AdminMovilComponent } from './admin-movil/admin-movil.component';
import { AdminMovilEditComponent } from './admin-movil-edit/admin-movil-edit.component';
import { AdminMovilEditMaintenanceComponent } from './admin-movil-edit-maintenance/admin-movil-edit-maintenance.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { AuthGuard } from './auth.guard';
import { AdminTextComponent } from './admin-text/admin-text.component';
import { AdminTextEditComponent } from './admin-text-edit/admin-text-edit.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'panelAdmin', component: PanelComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Posts', component: AdminPostComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/NewPost', component: AdminNewPostComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Users', component: AdminUsersComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Vehicles', component: AdminMovilComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Texts', component: AdminTextComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Texts/:id', component: AdminTextEditComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Vehicles/:id', component: AdminMovilEditComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Vehicles/maintenance/:id', component: AdminMovilEditMaintenanceComponent, canActivate: [AuthGuard] },
  { path: 'panelAdmin/Users/:id', component: AdminUsersEditComponent, canActivate: [AuthGuard] },
  { path: 'perfil/editar', component: EditProfileComponent },
  { path: 'perfil/detalles', component: ProfiledetailComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'moviles', component: MovilesComponent },
  { path: 'moviles/:id', component: VehicleComponent },
  { path: 'moviles/Adicional/:id', component: VehicleInformationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NoFoundComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
