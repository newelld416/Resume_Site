import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';

const routes: Routes = [
  Route.withShell([
    { path: 'experience', loadChildren: 'app/experience/experience.module#ExperienceModule' },
    { path: 'technology', loadChildren: 'app/technology/technology.module#TechnologyModule' },
    { path: 'articles', loadChildren: 'app/articles/articles.module#ArticlesModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
