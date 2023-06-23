import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { NewsComponent } from './news/news.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NoFoundComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }