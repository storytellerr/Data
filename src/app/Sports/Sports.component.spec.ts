import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sports } from './Sports.component';

describe('Sports', () => {
  let component: Sports;
  let fixture: ComponentFixture<Sports>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sports ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
