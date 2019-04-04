import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() postName: string;
  @Input() postStatus: number;
  @Input() postRank: string;
  @Input() postContent: string;
  creationDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.postStatus;
  }

  getColor() {
    if(this.postStatus > 0) {
      return 'green';
    } else if(this.postStatus < 0) {
      return 'red';
    } else if (this.postStatus = 0) {
      return 'white';
      }
    }

  addRank() {
      this.postStatus += 1;
    }

  delRank() {
      this.postStatus -= 1;
    }

  setRank() {
     if(this.postStatus > 0) {
       this.postRank = 'upper';
     } else if(this.postStatus < 0) {
       this.postRank = 'under';
     } else if (this.postStatus === 0) {
       this.postRank = 'zero';
     }
   }

  getRank() {
    this.setRank();
    return this.postRank;
  }
}