import {Component, OnInit} from '@angular/core';
import {SightseeingPoint} from '../../models/sightseeing-point';
import {SightsService} from '../../services/sights.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SightDetailsComponent} from '../sight-details/sight-details.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit {

  sights: SightseeingPoint[];

  constructor(private sightsService: SightsService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit(): void {
    this.sightsService.getSights().subscribe(sights => {
      this.sights = sights;
    });
  }

  open(sight: SightseeingPoint): void {
    const modalRef = this.modalService.open(SightDetailsComponent);
    modalRef.componentInstance.sight = sight;
  }

  editSight(sight: SightseeingPoint): void {
    this.router.navigateByUrl(`/sights-list/?longitude=${sight.longitude}&latitude=${sight.latitude}`).catch(console.error);
  }
}
