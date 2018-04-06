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

  getCoffeeById(coffeeId: string) {
    return this.database.object('coffees/' + coffeeId);
  }

  updateCoffee(localUpdatedCoffee) {
    var coffeeEntryInFirebase = this.getCoffeeById(localUpdatedCoffee.$key);
    coffeeEntryInFirebase.update({name: localUpdatedCoffee.name,
                                  price: localUpdatedCoffee.price,
                                  region: localUpdatedCoffee.region,
                                  producer: localUpdatedCoffee.producer,
                                  cultivar: localUpdatedCoffee.cultivar,
                                  processing: localUpdatedCoffee.processing,
                                  elevation: localUpdatedCoffee.elevation,
                                  taste: localUpdatedCoffee.taste,
                                  description: localUpdatedCoffee.description
    });

}
}
