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
  public Status = new Status;
  public post = [];
  public goalText: String = 'My first life goal';
  constructor() { }

  ngOnInit() {
  }

  addItem() {
  console.log(this.Status);
}


}


