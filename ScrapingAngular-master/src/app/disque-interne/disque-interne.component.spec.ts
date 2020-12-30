import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqueInterneComponent } from './disque-interne.component';

describe('DisqueInterneComponent', () => {
  let component: DisqueInterneComponent;
  let fixture: ComponentFixture<DisqueInterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisqueInterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqueInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
