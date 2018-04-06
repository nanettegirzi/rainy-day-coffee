import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Coffee } from '../coffee.model';
import { CoffeeService } from '../coffee.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css'],
  providers: [CoffeeService]
})
export class CoffeeDetailComponent implements OnInit {
  coffeeId: string;
  coffeeToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private coffeeService: CoffeeService
            ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.coffeeId = (urlParameters['id']);
    });
    this.coffeeToDisplay = this.coffeeService.getCoffeeById(this.coffeeId);
  }

}
