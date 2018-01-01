import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMyObservableComponent } from './test-my-observable.component';

describe('TestMyObservableComponent', () => {
  let component: TestMyObservableComponent;
  let fixture: ComponentFixture<TestMyObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMyObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMyObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
