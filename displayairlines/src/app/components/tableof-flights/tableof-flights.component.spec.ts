import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofFlightsComponent } from './tableof-flights.component';

describe('TableofFlightsComponent', () => {
  let component: TableofFlightsComponent;
  let fixture: ComponentFixture<TableofFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableofFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableofFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
