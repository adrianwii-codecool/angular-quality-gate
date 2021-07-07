import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SightsListComponent} from './sights-list/sights-list.component';
import {SightFormComponent} from './sight-form/sight-form.component';

const routes: Routes = [
  {path: '', component: SightsListComponent},
  {path: ':', component: SightFormComponent},
  {path: 'add', component: SightFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SightsListModuleRoutingModule { }
