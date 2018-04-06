import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee.model';
import { Router } from '@angular/router';
import { CoffeeService } from '../coffee.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  providers: [CoffeeService]
})
export class CoffeeComponent implements OnInit {
  coffees: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

constructor(private router: Router, private coffeeService: CoffeeService) {}

ngOnInit() {
  this.coffees = this.coffeeService.getCoffees();
}

  goToDetailPage(clickedCoffee) {
    this.router.navigate(['coffees', clickedCoffee.$key]);
  };
}
