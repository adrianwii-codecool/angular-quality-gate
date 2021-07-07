import {Injectable} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Country} from '../models/country';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SightsService {

  selectedSight: SightseeingPoint;

  constructor(private http: HttpClient) {
  }

  getSights(): Observable<SightseeingPoint[]> {
    return this.http.get<SightseeingPoint[]>(`${environment.apiUrl}/sights`).pipe(
      map(sights => {
        return sights.map(sight => {
          const country = new Country(sight.country.name, sight.country.iata_code);
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
    );
  }

  getSight(longitude: number, latitude: number): Observable<SightseeingPoint> {
    return this.http.get<SightseeingPoint>(`${environment.apiUrl}/sights/?longitude=${longitude}&latitude=${latitude}`).pipe(
      map((sights: any) => sights.shift())
    );
  }

  addSight(sight: SightseeingPoint): Observable<SightseeingPoint> {
    return this.http.post<SightseeingPoint>(`${environment.apiUrl}/sights`, sight);
  }

  updateSight(sight: SightseeingPoint, sightId: string): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/sights/${sightId}`, sight);
  }
}
