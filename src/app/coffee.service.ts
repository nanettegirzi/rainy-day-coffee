import { Injectable } from '@angular/core';
import { Coffee } from './coffee.model';
import { COFFEES } from './mock-coffees';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CoffeeService {
  coffees: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.coffees = database.list('coffees');
}

  getCoffees() {
    return this.coffees;
  }

  getCoffeeById(coffeeId: number) {
    for (var i = 0; i <= COFFEES.length -1; i++) {
      if (COFFEES[i].id === coffeeId) {
        return COFFEES[i];
      }
    }
  }
}
