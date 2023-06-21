import { Component, OnInit } from '@angular/core';
import { ThemeService } from './Services/Theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.themeService.updateRootStyles(theme);
    });
  }
}
