import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
  private friends = new BehaviorSubject<any>([]);
  friend = this.friends.asObservable();

  constructor() { }

  addItem(item) {
    this.friends.next(this.friends.getValue().concat([item]));
  }
}
