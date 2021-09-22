import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { MatchesService } from '../services/matches.service';
import { Matches } from '../matches';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  match : Matches = new Matches();
  submitted = false;

  constructor(private customerService: CustomerService, private matchesService :MatchesService) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;

    this.match.hometeam = "Slavia Praha";
    this.match.awayteam = "FC Barcelona";
    this.match.scorehome = 1;
    this.match.scoreaway = 1;
    this.match.competition = "CL";
    this.match.competitionPhase = "Fake phase";

    this.matchesService.createMatch(this.match)
    .subscribe(data => console.log(data), error => console.log(error));

    this.save();
  }
}
