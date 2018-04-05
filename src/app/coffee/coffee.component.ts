import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee.model';
import { Router } from '@angular/router';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  providers: [CoffeeService]
})
export class CoffeeComponent implements OnInit {
  coffees: Coffee[];

constructor(private router: Router, private coffeeService: CoffeeService) {}

ngOnInit() {
  this.coffees = this.coffeeService.getCoffees();
}

  goToDetailPage(clickedCoffee: Coffee) {
    this.router.navigate(['coffees', clickedCoffee.id]);
  };
}
