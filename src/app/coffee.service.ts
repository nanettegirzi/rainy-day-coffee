import { Injectable } from '@angular/core';
import { Coffee } from './coffee.model';
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

  addCoffee(newCoffee: Coffee) {
    this.coffees.push(newCoffee);
  }

  getCoffeeById(coffeeId: number) {
    // for (var i = 0; i <= COFFEES.length -1; i++) {
    //   if (COFFEES[i].id === coffeeId) {
    //     return COFFEES[i];
    //   }
    // }
  }
}
