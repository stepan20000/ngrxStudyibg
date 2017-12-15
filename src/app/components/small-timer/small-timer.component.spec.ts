import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTimerComponent } from './small-timer.component';

describe('SmallTimerComponent', () => {
  let component: SmallTimerComponent;
  let fixture: ComponentFixture<SmallTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
