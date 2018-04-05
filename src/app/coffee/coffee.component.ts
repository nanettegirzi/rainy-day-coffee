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
    new Coffee("Nightcap", 13.50, "SIDAMA, ETHIOPIA", "Many small farms", "Heirloom", "Natural", "1500 - 2000 masl", "Milk chocolate, apple, jasmine", "This natural process coffee was sourced from smallholder farmers in Ethiopia’s Sidama region. The green coffee was shipped, after preselection from Ethiopia to Veracruz, Mexico, the location of Descamex and their chemical-free decaffeination method called Mountain Water Process. The technique involves hydrating the coffee beans, preloading the water with green coffee extract – basically everything that makes coffee coffee except for caffeine. The saturated coffee-solids water extracts just the caffeine, is drained and filtered, and then the process is repeated until the coffee is at least 97% free of the alkaloid.",1),
    new Coffee("Colombia San Joaquin", 14.90, "ALTO NARANJAL, COLOMBIA", "Leonardo Loaiza", "Caturra", "2100 masl", "Washed", "Pear, granny smith apple. lemon candy", "Leonardo Loaiza, who produced this lot on his 7-acre farm called San Joaquin, has been farming coffee for more than five years. Because of the farm’s high elevation and remote location, Leonardo has to work extra hard to bring his coffee safely to the market. For that reason, in the last few years he has dedicated some of his resources to make Finca San Joaquin more accessible for his family and workers. Leonardo uses his own micro-mill to process harvested cherries, which allows for meticulous care in depulping, twelve-hour fermentation periods, and 7 to 14 days of drying.",2),
    new Coffee("Ethiopia Gelgelu", 15.80, "GEDEO ZONE, ETHIOPIA","Gelgelu Edema", "Heirloom", "Full natural - dried on raisin beds", "1750 -2300 masl", "Burnt sugar, tamarind, tropical fruit", "This coffee is produced by Gelgelu Edema and processed as a separate lot at the Worka Cooperative. The Worka cooperative is located in the southern district of Gedeb in the Gedeo Zone, Ethiopia. Gelgelu Edema is part of the single producer project developed jointly between the Yirgacheffe Coffee Farmers Cooperative Union (YCFCU) and Royal Coffee.  The popularity of the single producer project has led to increased participation and an opportunity to showcase more from the growing numbers of small and talented producers who continue to work in the cooperative system.",3),
    new Coffee("Crema", 12.80, "Apeneca-Ilamatepec, El Salvador | Carmo de Minas, Brazil", "Vides Family | Canaan Estate", "Bourbon, Pacas | Bourbon, Catuai", "Washed | Pupled Natural", "1200 - 1300 masl | 1050 masl","Traditional expresso", "Crema serves as a hallmark of quality espresso for the classic coffee drinker. While the rich, creamy foam topping espresso has become a subject of debate in the specialty coffee world, we believe that its quality is subjective and a matter of personal taste. Our Crema blend presents the sweetness for which Slate’s coffees are renown, while offering the richness and balance of a classic Italian espresso. Currently, this blend is comprised of two seasonal coffees from Central and/or South America. When paired together, these coffees produce a syrupy, full-bodied espresso topped with luxurious crema that is sure to please the espresso traditionalist.",4)
  ];

  goToDetailPage(clickedCoffee: Coffee) {
    this.router.navigate(['coffees', clickedCoffee.id]);
  };
}
