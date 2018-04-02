import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/personal', pathMatch: 'full' },
    { path: 'personal', component: PersonalComponent, data: { title: extract('Personal') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PersonalRoutingModule { }
