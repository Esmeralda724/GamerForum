import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user = {
    email: '',
    password: '',
    reenterpassword: ''
  };



  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
  }

  clear() {
    this.user = {
      email: '',
      password: '',
      reenterpassword: ''
    };
  }


  go() {
    this.router.navigate(['/gamerforum']);
  }

}
