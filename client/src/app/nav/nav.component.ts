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
