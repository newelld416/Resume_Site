import { Component, OnInit, ViewChild } from '@angular/core';

import { environment } from '@env/environment';
import { Modal } from 'ngx-modal';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('experienceModal') modal: Modal;

  constructor() { }

  ngOnInit() { }

  openModal() {
    this.modal.open();
  }

  modalSubmitted(event: any) {
    console.log('Modal Submitted');
  }

}
