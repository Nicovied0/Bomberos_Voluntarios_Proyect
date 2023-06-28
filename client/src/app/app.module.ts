import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
import { ThemeService } from './Services/Theme.service';
import { NoFoundComponent } from './no-found/no-found.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleService } from './Services/Vehicles.service';

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
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [
    ThemeService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
