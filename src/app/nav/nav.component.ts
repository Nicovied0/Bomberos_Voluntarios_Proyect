import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) { }

  goContacts() {
    this.router.navigate(['/contacto'])
  }
  goProfile() {
    this.router.navigate(['/perfil'])
  }

  goHome() {
    this.router.navigate(['/'])
  }
  goNews() {
    this.router.navigate(['/noticias'])
  }
}
