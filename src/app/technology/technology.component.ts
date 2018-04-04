import { Component, OnInit, ViewChild } from '@angular/core';

// This is returning the mocked data to be used in the component
const data = require('./technology-data.json');

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  cards: {};

  constructor() { }

  ngOnInit() {
    this.cards = data.cards;
  }

}
