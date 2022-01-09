import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SightsListModuleRoutingModule } from './sights-list-module-routing.module';
import {SightsListComponent} from './sights-list/sights-list.component';
import { SightDetailsComponent } from './sight-details/sight-details.component';
import { SightFormComponent } from './sight-form/sight-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SightsListComponent,
    SightDetailsComponent,
    SightFormComponent
  ],
  imports: [
    CommonModule,
    SightsListModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class SightsListModuleModule { }
