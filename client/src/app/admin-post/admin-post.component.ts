import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/Post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }
  posts: any[] = [];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.obtenerPublicaciones().subscribe(
      (postResponse: any[]) => {
        this.posts = postResponse;
        console.log(this.posts);
      },
      (error) => {
        console.error('Error al obtener las publicaciones:', error);
      }
    );
  }

  goNew(){
    this.router.navigate(['/panelAdmin/NewPost'])
  }
}
