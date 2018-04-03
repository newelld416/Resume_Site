import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TechnologyRoutingModule
  ],
  declarations: [
    TechnologyComponent
  ]
})
export class TechnologyModule { }
