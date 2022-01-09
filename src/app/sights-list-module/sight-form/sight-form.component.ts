import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SightsService} from '../../services/sights.service';
import {SightCoordinates} from '../../models/sight-coordinates';
import {SightseeingPoint} from '../../models/sightseeing-point';
import {Country} from '../../models/country';

@Component({
  selector: 'app-sight-form',
  templateUrl: './sight-form.component.html',
  styleUrls: ['./sight-form.component.scss']
})
export class SightFormComponent implements OnInit {

  form: FormGroup;
  sightCoordinates: SightCoordinates | null;
  sightId: string;
  DDLatRegex = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,9})?))$/;
  DDLngRegex = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,9})?))$/;
  colors: [number, string][] = [...SightseeingPoint.colors()];

  constructor(private route: ActivatedRoute, private sightsService: SightsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      longitude: new FormControl(0, [Validators.required, Validators.pattern(this.DDLngRegex)]),
      latitude: new FormControl(0, [Validators.required, Validators.pattern(this.DDLatRegex)]),
      country_name: new FormControl('', Validators.required),
      iata_code: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      color: new FormControl(0, Validators.required),
    });
    this.getCoordinates();
    this.checkIfModify();
  }

  sightModify(): void {
    const sight = new SightseeingPoint(
      this.form.value.name,
      this.form.value.longitude,
      this.form.value.latitude,
      new Country(this.form.value.country_name, this.form.value.iata_code),
      this.form.value.description,
      Number(this.form.value.color),
    );
    this.sightCoordinates ?
      this.sightsService.updateSight(sight, this.sightId)
        .subscribe() :
      this.sightsService.addSight(sight).subscribe();
  }

  errorMessage(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].touched && this.form.controls[controlName]?.errors?.[errorName];
  }

  checkIfModify(): void {
    if (this.sightCoordinates) {
      this.sightsService.getSight(this.sightCoordinates.longitude, this.sightCoordinates.latitude)
        .subscribe((sight: any) => {
          this.form.patchValue({
            name: sight.name,
            longitude: sight.longitude,
            latitude: sight.latitude,
            country_name: sight.country.name,
            iata_code: sight.country.iata_code,
            description: sight.description,
            color: sight.color
          });
          this.sightId = sight.id;
        });
    }
  }

  private getCoordinates(): void {
    this.route.queryParams.subscribe(params => {
      if (params.longitude) {
        this.sightCoordinates = {
          longitude: Number(params.longitude),
          latitude: Number(params.latitude)
        };
      }
    });
  }
}
