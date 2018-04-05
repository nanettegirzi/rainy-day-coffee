import { Injectable } from '@angular/core';
import { Coffee } from './coffee.model';
import { COFFEES } from './mock-coffees';

@Injectable()
export class CoffeeService {

  constructor() { }

  getCoffees() {
    return COFFEES;
  }

  getCoffeeById(coffeeId: number) {
    for (var i = 0; i <= COFFEES.length -1; i++) {
      if (COFFEES[i].id === coffeeId) {
        return COFFEES[i];
      }
    }
  }
}
