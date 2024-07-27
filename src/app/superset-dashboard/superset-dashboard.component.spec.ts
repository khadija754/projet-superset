import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersetDashboardComponent } from './superset-dashboard.component';

describe('SupersetDashboardComponent', () => {
  let component: SupersetDashboardComponent;
  let fixture: ComponentFixture<SupersetDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupersetDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupersetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
