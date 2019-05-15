import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTrainingComponent } from './lazy-training.component';

describe('LazyTrainingComponent', () => {
  let component: LazyTrainingComponent;
  let fixture: ComponentFixture<LazyTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
