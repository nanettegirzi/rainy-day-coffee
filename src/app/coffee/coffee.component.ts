import { Component } from '@angular/core';
import { Coffee } from '../coffee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent {
  constructor (private router: Router) {}
  coffees: Coffee[] = [
    new Coffee("Nightcap", 13.50, "SIDAMA, ETHIOPIA", "Many small farms", "Heirloom", "Natural", "1500 - 2000 masl", "Milk chocolate, apple, jasmine", "This natural process coffee was sourced from smallholder farmers in Ethiopia’s Sidama region. The green coffee was shipped, after preselection from Ethiopia to Veracruz, Mexico, the location of Descamex and their chemical-free decaffeination method called Mountain Water Process. The technique involves hydrating the coffee beans, preloading the water with green coffee extract – basically everything that makes coffee coffee except for caffeine. The saturated coffee-solids water extracts just the caffeine, is drained and filtered, and then the process is repeated until the coffee is at least 97% free of the alkaloid.",1)
  ];

  goToDetailPage(clickedCoffee: Coffee) {
    this.router.navigate(['coffees', clickedCoffee.id]);
  };
}
