import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ExperienceRoutingModule
  ],
  declarations: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
