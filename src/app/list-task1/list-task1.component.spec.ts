import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskComponent1 } from './list-task.component1';

describe('ListTaskComponent1', () => {
  let component: ListTaskComponent1;
  let fixture: ComponentFixture<ListTaskComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTaskComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
