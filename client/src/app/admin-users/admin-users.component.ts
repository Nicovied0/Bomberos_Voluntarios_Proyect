import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  constructor(private router: Router){}

  goNewPost(){
    this.router.navigate(['/panelAdmin/NewPost'])
  }
}
