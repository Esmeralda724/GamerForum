import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class FriendsService {
  private friends = new BehaviorSubject<any>([]);
  public friendsList = this.friends.asObservable();

  constructor() { }

  addFriend(friend) {
    // add a new friend while keeping the old ones
    this.friends.next(this.friends.getValue().concat([friend]));
  }
}
