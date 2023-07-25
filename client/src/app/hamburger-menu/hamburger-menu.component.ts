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
    this.router.navigate(['/contacto']).then(() => {
      window.scrollTo(0, 0);
    });
    this.menuVisible = false
  }
  goProfile() {
    this.router.navigate(['/perfil']).then(() => {
      window.scrollTo(0, 0);
    });
    this.menuVisible = false
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });
    this.menuVisible = false
  }
  goNews() {
    this.router.navigate(['/noticias']).then(() => {
      window.scrollTo(0, 0);
    });
    this.menuVisible = false
  }
  goHistory() {
    this.router.navigate(['/historia']).then(() => {
      window.scrollTo(0, 0);
    });
    this.menuVisible = false
  }


  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
