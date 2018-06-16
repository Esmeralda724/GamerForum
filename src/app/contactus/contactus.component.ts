import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public contact = {
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  };

  public user = {
    firstname: '',
    lastname: '',
    email: '',
    comments: '',
  };
  constructor(private router: Router, public http: HttpClient) { }

  ngOnInit() {
  }

  clear() {
    this.user = {
      firstname: '',
      lastname: '',
      email: '',
      comments: '',
    };
  }

submit() {
  this.http.post('http://localhost:8080/sendEmail', this.contact)
    .subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
}

}
