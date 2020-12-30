import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurTourComponent } from './serveur-tour.component';

describe('ServeurTourComponent', () => {
  let component: ServeurTourComponent;
  let fixture: ComponentFixture<ServeurTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeurTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeurTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
