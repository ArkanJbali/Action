import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTableComponent } from './middle-table.component';

describe('MiddleTableComponent', () => {
  let component: MiddleTableComponent;
  let fixture: ComponentFixture<MiddleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
