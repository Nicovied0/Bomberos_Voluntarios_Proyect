import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
