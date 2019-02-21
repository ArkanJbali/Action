import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBarComponent } from './weekly-bar.component';

describe('WeeklyBarComponent', () => {
  let component: WeeklyBarComponent;
  let fixture: ComponentFixture<WeeklyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
