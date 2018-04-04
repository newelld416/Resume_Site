import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ExperienceRoutingModule,
    ModalExampleComponent
  ],
  declarations: [
    ExperienceComponent,
    ModalExampleComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExperienceModule { }
