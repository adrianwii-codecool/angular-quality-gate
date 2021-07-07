import {Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import * as mapbox from 'ngx-mapbox-gl';
import {Location} from '../models/location';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

  @ViewChild(mapbox.MapComponent, {static: true}) map;
  @Input() location: Location;
  @Input() sights: SightseeingPoint[];
  @Output() selectedSightEvent = new EventEmitter<SightseeingPoint>();
  loading = true;
  sightsInRadius: number;

  centerMap(location: Location): void {
    this.loading = false;
    this.map.mapInstance.flyTo({center: [location.longitude, location.latitude]});
  }

  ngOnChanges(): void {
    this.countSightsInRadius(environment.cityRadius);
  }

  countSightsInRadius(radius: number): void {
    this.sightsInRadius = 0;
    this.sights?.forEach((sight: SightseeingPoint) => {
      if (this.getDistance(sight.longitude, sight.latitude, this.location.longitude, this.location.latitude) < radius) {
        this.sightsInRadius++;
      }
    });
  }

  getDistance(lon1: number, lat1: number, lon2: number, lat2: number): number {
    const R = 6371e3; // metres
    const lat1Radians = lat1 * Math.PI / 180; // φ, λ in radians
    const lat2Radians = lat2 * Math.PI / 180;
    const deltaLatitude = (lat2 - lat1) * Math.PI / 180;
    const deltaLongitude = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
      Math.cos(lat1Radians) * Math.cos(lat2Radians) *
      Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in metres
  }
}
