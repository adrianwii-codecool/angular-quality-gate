import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightsListComponent } from './sights-list.component';

describe('SightsListComponent', () => {
  let component: SightsListComponent;
  let fixture: ComponentFixture<SightsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
