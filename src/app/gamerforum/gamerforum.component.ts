import { Component, OnInit } from '@angular/core';

class Status {
  content: String;
}
@Component({
  selector: 'app-gamerforum',
  templateUrl: './gamerforum.component.html',
  styleUrls: ['./gamerforum.component.css']
})
export class GamerforumComponent implements OnInit {
  public item = [];
  public status = {
    post: ''
  };

  constructor() { }

  ngOnInit() {
  }

 post() {
  console.log(this.status);
  this.item.push(this.status);
  this.status = {
    post: ''
  };
}


}


