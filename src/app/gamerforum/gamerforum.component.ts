import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FriendsService } from '../friends.service';
import { ThrowStmt } from '@angular/compiler';


class Status {
  content: String;
}
@Component({
  selector: 'app-gamerforum',
  templateUrl: './gamerforum.component.html',
  styleUrls: ['./gamerforum.component.css']
})
export class GamerforumComponent implements OnInit {

  public friends = [
    {
      added: false,
      img: '../assets/esmee1.jpg',
      name: 'EsmeeMotionless',
      desc: 'I mostly play Overwatch on my Xbox. Add me if you wanna group up and play. SR: 2500 GT: EsmeeMotionless'
    },
    {
      added: false,
      img: 'https://i.pinimg.com/236x/a7/01/92/a70192185abd67796b0b3eb2ae7c36d3--the-she-she-is.jpg',
      name: 'ihascupquake',
      desc: 'I love playing different video games. Such as Overwatch, Fortnite. Add me if you want to play.'

    },
    {
      added: false,
      img: 'https://naibuzz.com/wp-content/uploads/2017/03/Pokimane-2.jpg',
      name: 'Pokimane',
      desc: 'I am mostly streaming League of Legends on Twitch. I do occasionally play Overwatch and I\'m da best!'
    }
  ];

  constructor(private router: Router, private _data: DataService, public _friendsService: FriendsService) { }

  ngOnInit() {
    this._friendsService.friendsList.subscribe((res) => {
      for (const friend of res) {
        const result = this.friends.findIndex(item => item.name === friend.name);
        this.friends[result] = friend;
      }
    });
  }

  newFriends() {
    this._data.addItem(this.friends);
    console.log(this.friends);
  }

  go() {
    this.router.navigate(['../friendsadded']);
  }

  addFriend(friend) {
    const index = this.friends.indexOf(friend);
    this.friends[index].added = true;
    this._friendsService.addFriend(friend);
  }

}


