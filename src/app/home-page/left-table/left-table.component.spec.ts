import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTableComponent } from './left-table.component';

describe('LeftTableComponent', () => {
  let component: LeftTableComponent;
  let fixture: ComponentFixture<LeftTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
