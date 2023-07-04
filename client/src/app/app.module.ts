import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';

import { ThemeService } from './Services/Theme.service';
import { VehicleService } from './Services/Vehicles.service';
import { AuthService } from './Services/Auth.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MapsComponent } from './maps/maps.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { NewsComponent } from './news/news.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HistoryComponent } from './history/history.component';
import { MovilesComponent } from './moviles/moviles.component';
import { VehicleComponent } from './vehicle/vehicle.component';

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
    IngresosComponent,
    NewsComponent,
    NoFoundComponent,
    CarruselComponent,
    HamburgerMenuComponent,
    VehiclesComponent,
    HistoryComponent,
    MovilesComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
