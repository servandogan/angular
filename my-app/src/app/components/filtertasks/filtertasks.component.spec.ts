import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertasksComponent } from './filtertasks.component';

describe('FiltertasksComponent', () => {
  let component: FiltertasksComponent;
  let fixture: ComponentFixture<FiltertasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltertasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltertasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
