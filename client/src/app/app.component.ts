import { Component, OnInit } from '@angular/core';
import { ThemeService } from './Services/Theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public themeClass: any;
  
  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => {
      this.themeClass = theme === 'claro' ? 'claro-theme' : 'oscuro-theme';
    });
  }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.updateRootStyles(theme);
    });
  }

  private updateRootStyles(theme: string): void {
    const root = document.documentElement;
    root.style.setProperty('--background-color', theme === 'claro' ? 'white' : 'black');
    root.style.setProperty('--text-color', theme === 'claro' ? 'black' : 'white');
  }

}
