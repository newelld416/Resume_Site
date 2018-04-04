import { Component, OnInit, ViewChild } from '@angular/core';

// This is returning the mocked data to be used in the component
const data = require('./experience-data.json');

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  cards: {};

  constructor() { }

  ngOnInit() {
    this.cards = data.cards;
  }

}
