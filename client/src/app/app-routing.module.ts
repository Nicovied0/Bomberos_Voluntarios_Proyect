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

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'panelAdmin', component: PanelComponent },
  { path: 'panelAdmin/Posts', component: AdminPostComponent },
  { path: 'panelAdmin/NewPost', component: AdminNewPostComponent },
  { path: 'panelAdmin/Users', component: AdminUsersComponent },
  { path: 'panelAdmin/Vehicles', component: AdminMovilComponent },
  { path: 'panelAdmin/Users/:id', component: AdminUsersEditComponent },
  { path: ' panelAdmin/Vehicles/:id', component: AdminMovilEditComponent },
  { path: 'perfil/editar', component: EditProfileComponent },
  { path: 'perfil/detalles', component: ProfiledetailComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'moviles', component: MovilesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'moviles/:id', component: VehicleComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NoFoundComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
