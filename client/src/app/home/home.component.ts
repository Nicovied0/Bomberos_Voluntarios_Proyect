import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  goHistory() {
    this.router.navigate(['/historia']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goMoviles() {
    this.router.navigate(['/moviles']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goNews() {
    this.router.navigate(['/noticias']).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
