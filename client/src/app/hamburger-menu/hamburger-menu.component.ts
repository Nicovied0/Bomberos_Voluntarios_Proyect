import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {
  constructor(private router: Router) { }
  menuVisible: boolean = false;
  goContacts() {
    this.router.navigate(['/contacto'])
    this.menuVisible = false
  }
  goProfile() {
    this.router.navigate(['/perfil'])
    this.menuVisible = false
  }

  goHome() {
    this.router.navigate(['/'])
    this.menuVisible = false
  }
  goNews() {
    this.router.navigate(['/noticias'])
    this.menuVisible = false
  }
  goHistory() {
    this.router.navigate(['/historia'])
    this.menuVisible = false
  }


  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
