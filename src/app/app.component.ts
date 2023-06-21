import { Component } from '@angular/core';
import { ThemeService } from './Services/Theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-bomberos';
  constructor(private localeTheme: ThemeService) { }

  
}
