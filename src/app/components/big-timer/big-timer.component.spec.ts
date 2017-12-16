import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTimerComponent } from './big-timer.component';

describe('BigTimerComponent', () => {
  let component: BigTimerComponent;
  let fixture: ComponentFixture<BigTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
