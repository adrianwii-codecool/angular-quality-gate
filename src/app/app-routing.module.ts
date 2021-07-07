import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SightsComponent} from './sights/sights.component';

const routes: Routes = [
  {path: '', redirectTo: '/sights', pathMatch: 'full'},
  {path: 'sights', component: SightsComponent},
  {path: 'sights-list', loadChildren: () => import('./sights-list-module/sights-list-module-routing.module')
      .then(m => m.SightsListModuleRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
