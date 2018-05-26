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
  goals = [];


  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
    {
      this.itemCount = this.goals.length;
      this._data.goal.subscribe(res => this.goals = res);
      this._data.changeGoal(this.goals);
    }
    addItem() {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
    }

    removeItem(i) {
      this.goals.splice(i, 1);
      this._data.changeGoal(this.goals);
    }
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
