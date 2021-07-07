import {Injectable} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Country} from '../models/country';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SightsService {

  selectedSight: SightseeingPoint;

  constructor(private http: HttpClient) {
  }

  getSights(): Observable<SightseeingPoint[]> {
     return this.http.get<SightseeingPoint[]>(`${environment.apiUrl}/sights`).pipe(
      tap(console.log),
      map(result => result),
      map(sights => {
        return sights.map(sight => {
          const country = new Country();
          country.name = sight.country.name;
          country.iata_code = sight.country.iata_code;

          return new SightseeingPoint(
            sight.name,
            sight.longitude,
            sight.latitude,
            country,
            sight.description,
            sight.color
          );
        });
      }),
      map(sights => {
        return sights.filter(sight => sight.color);
      })
    );
  }
}
