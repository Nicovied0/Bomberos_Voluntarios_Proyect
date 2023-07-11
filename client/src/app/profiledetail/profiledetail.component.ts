import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})

export class ProfiledetailComponent implements OnInit {
  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  public profileData = {
    name: '',
    email: '',
    imagen: '',
    number: ''
  };

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    const profile = localStorage.getItem('profile');
    if (profile) {
      this.profileData = JSON.parse(profile);
    }
  }
  
  goProfile() {
    this.router.navigate(['/perfil'])
  }
}
