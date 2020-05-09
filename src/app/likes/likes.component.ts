import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes : number = 0;
  dislikes : number = 0;

  likeButtonClick(){
    this.likes++;
  }

  dislikeButtonclick(){
    this.dislikes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
