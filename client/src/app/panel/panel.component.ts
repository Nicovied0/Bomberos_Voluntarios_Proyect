import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  constructor(private router: Router) { }

  goNewPost() {
    this.router.navigate(['/panelAdmin/NewPost'])
  }
  goUsers() {
    this.router.navigate(['/panelAdmin/Users'])
  }

}
