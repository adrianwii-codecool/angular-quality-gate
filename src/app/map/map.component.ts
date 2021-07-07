import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import * as mapbox from 'ngx-mapbox-gl';
import {Location} from '../models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @ViewChild(mapbox.MapComponent, { static: true }) map;
  @Input() location: Location;
  @Input() sights: SightseeingPoint[];
  @Output() selectedSightEvent = new EventEmitter<SightseeingPoint>();
  loading = true;

  centerMap(location: Location): void {
    this.loading = false;
    this.map.mapInstance.flyTo({ center: [location.longitude, location.latitude] });
  }
}
