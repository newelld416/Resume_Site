import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

const fs = require('fs');

// This is returning the mocked data to be used in the component
const data = require('./personal-data.json');

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  cards: {};
  email: string;
  phoneNumber: string;
  unformattedPhoneNumber: string;
  facebook: string;

  constructor() { }

  ngOnInit() {
    this.phoneNumber = `${data.phone.countryCode} (${data.phone.areaCode}) ${data.phone.phoneNumber}`;
    this.unformattedPhoneNumber = `${data.phone.countryCode}${data.phone.areaCode}${data.phone.phoneNumber}`;
    this.email = data.email;
    this.cards = data.cards;
    this.facebook = data.facebook;
  }

}
