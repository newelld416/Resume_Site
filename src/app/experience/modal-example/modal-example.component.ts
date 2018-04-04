import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  submit() {
    this.onSubmit.emit('Closed');
  }
}
