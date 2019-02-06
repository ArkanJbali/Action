import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTableComponent } from './right-table.component';

describe('RightTableComponent', () => {
  let component: RightTableComponent;
  let fixture: ComponentFixture<RightTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
