import {Component, OnInit} from '@angular/core';
import {SightsService} from '../services/sights.service';
import {environment} from '../../environments/environment';
import {City} from '../models/city';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private sightsService: SightsService) {
  }

  links = [
    {
      title: 'LIST',
      path: 'sights-list'
    },
    {
      title: 'MAP',
      path: 'sights'
    },
    {
      title: 'ADD',
      path: 'add'
    }
  ];

  cities: City[] = [];

  ngOnInit(): void {
    this.cities = environment.cities;
  }

  changeCity(event): void {
    const selectedCity = this.cities.filter(city => city.name === event.target.value).shift();
    this.sightsService.selectedCity.next(selectedCity.coordinates);
  }
}
