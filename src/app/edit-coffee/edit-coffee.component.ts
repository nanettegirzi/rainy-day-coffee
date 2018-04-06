import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../coffee.model';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-edit-coffee',
  templateUrl: './edit-coffee.component.html',
  styleUrls: ['./edit-coffee.component.css'],
  providers: [CoffeeService]
})
export class EditCoffeeComponent implements OnInit {
  @Input() selectedCoffee;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
  }

  beginUpdatingCoffee(coffeeToUpdate) {
    this.coffeeService.updateCoffee(coffeeToUpdate);
  }

}
