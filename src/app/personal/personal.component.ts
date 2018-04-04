import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

const fs = require('fs');

const data = require('./personal-data.json');

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  cards: {};

  constructor() { }

  ngOnInit() {
    this.cards = data.cards;
  }

}
