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
  ) { }

  public profileData = {
    name: '',
    email: '',
    imagen: '',
    number: '',
    description: ''
  };
  public descrptionInfo = false

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    const profile = localStorage.getItem('profile');
    if (profile) {
      this.profileData = JSON.parse(profile);
    }
    if (this.profileData.description == '') {
      this.descrptionInfo = true
    }
  }

  goProfile() {
    this.router.navigate(['/perfil']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
