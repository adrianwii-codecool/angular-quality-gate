import {Component, OnInit} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {SightsService} from '../services/sights.service';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit {

  sights: SightseeingPoint[];

  constructor(private sightsService: SightsService) {
  }

  ngOnInit(): void {
    this.sightsService.getSights().subscribe(sights => {
      this.sights = sights;
    });
  }
}
