import { Component } from '@angular/core';
import { PostService } from '../Services/Post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent {

  iframeLink: string = '';

  constructor(private router: Router, private postService: PostService) { }
  

}
