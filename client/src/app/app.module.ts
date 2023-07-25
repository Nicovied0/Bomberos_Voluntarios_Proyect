import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeService } from './Services/Theme.service';
import { VehicleService } from './Services/Vehicles.service';
import { AuthService } from './Services/Auth.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MapsComponent } from './maps/maps.component';
import { NewsComponent } from './news/news.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HistoryComponent } from './history/history.component';
import { MovilesComponent } from './moviles/moviles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DropImagenComponent } from './drop-imagen/drop-imagen.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminUsersEditComponent } from './admin-users-edit/admin-users-edit.component';
import { AdminNewPostComponent } from './admin-new-post/admin-new-post.component';
import { AdminMovilComponent } from './admin-movil/admin-movil.component';
import { AdminMovilEditComponent } from './admin-movil-edit/admin-movil-edit.component';
import { AdminMovilEditMaintenanceComponent } from './admin-movil-edit-maintenance/admin-movil-edit-maintenance.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { AdminTextComponent } from './admin-text/admin-text.component';
import { AdminTextEditComponent } from './admin-text-edit/admin-text-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactoComponent,
    PerfilComponent,
    FooterComponent,
    PanelComponent,
    LoginFormComponent,
    MapsComponent,
    NewsComponent,
    NoFoundComponent,
    CarruselComponent,
    HamburgerMenuComponent,
    VehiclesComponent,
    HistoryComponent,
    MovilesComponent,
    VehicleComponent,
    RegisterFormComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    DropImagenComponent,
    ProfiledetailComponent,
    AdminUsersComponent,
    AdminPostComponent,
    AdminUsersEditComponent,
    AdminNewPostComponent,
    AdminMovilComponent,
    AdminMovilEditComponent,
    AdminMovilEditMaintenanceComponent,
    VehicleInformationComponent,
    AdminTextComponent,
    AdminTextEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [
    ThemeService,
    VehicleService,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
