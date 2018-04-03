import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { PhotoService } from '../services/photo.service';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TechnologyRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TechnologyComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    PhotoService
  ]
})
export class TechnologyModule { }
