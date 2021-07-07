import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {environment} from '../environments/environment';
import {SightsComponent} from './sights/sights.component';
import {NavComponent} from './nav/nav.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {SightsListComponent} from './sights-list/sights-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SightsComponent,
    NavComponent,
    SightsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxToken
    }),
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
