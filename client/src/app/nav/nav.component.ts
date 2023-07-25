import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../Services/Theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router, private themeService: ThemeService) { }
  public themeLocal = false

  goContacts() {
    this.router.navigate(['/contacto']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goProfile() {
    this.router.navigate(['/perfil']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goNews() {
    this.router.navigate(['/noticias']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goHistory() {
    this.router.navigate(['/historia']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.themeService.theme$.subscribe(theme => {
      if (theme === "claro") {
        this.themeLocal = false;
      }
      if (theme === "oscuro") {
        this.themeLocal = true;
      }
    });
  }


}
