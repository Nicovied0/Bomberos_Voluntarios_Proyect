import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateTextService } from '../Services/UpdateText.service';
declare const Swal: any;


@Component({
  selector: 'app-admin-text',
  templateUrl: './admin-text.component.html',
  styleUrls: ['./admin-text.component.css']
})
export class AdminTextComponent implements OnInit {
  constructor(private router: Router, private updateTextService: UpdateTextService) { }

  texts: any[] = [];

  ngOnInit() {
    this.updateTextService.getImage().then((results) => {
      this.texts = results;
      console.log(this.texts);

    }).catch((error) => {
      console.error('Error al obtener los textos', error);
    });
  }


  goEdit(_id: any) {
    this.router.navigate(['panelAdmin/Texts', _id]).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
