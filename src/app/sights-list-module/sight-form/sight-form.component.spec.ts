import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightFormComponent } from './sight-form.component';

describe('SightFormComponent', () => {
  let component: SightFormComponent;
  let fixture: ComponentFixture<SightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
