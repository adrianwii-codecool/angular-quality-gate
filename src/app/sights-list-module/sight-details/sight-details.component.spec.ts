import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightDetailsComponent } from './sight-details.component';

describe('SightDetailsComponent', () => {
  let component: SightDetailsComponent;
  let fixture: ComponentFixture<SightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
