import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CoffeeService]
})
export class AdminComponent implements OnInit {

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
  }

  submitForm(name: string, price: number, region: string, producer: string, cultivar: string, processing: string, elevation: string, taste: string, description: string){
    var newCoffee: Coffee = new Coffee (name, price, region, producer, cultivar, processing, elevation, taste, description)
    this.coffeeService.addCoffee(newCoffee);
  }
}
