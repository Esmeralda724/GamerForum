import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friendsadded',
  templateUrl: './friendsadded.component.html',
  styleUrls: ['./friendsadded.component.css']
})
export class FriendsaddedComponent implements OnInit {
  public friends = [];
  constructor(public _friendsService: FriendsService) { }

  ngOnInit() {
    this._friendsService.friendsList.subscribe((friends) => {
      console.log(friends);
      this.friends = friends;
    });
  }


}
