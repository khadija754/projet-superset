import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First01Component } from './first01.component';

describe('First01Component', () => {
  let component: First01Component;
  let fixture: ComponentFixture<First01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [First01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
