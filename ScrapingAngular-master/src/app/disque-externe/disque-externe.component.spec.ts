import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqueExterneComponent } from './disque-externe.component';

describe('DisqueExterneComponent', () => {
  let component: DisqueExterneComponent;
  let fixture: ComponentFixture<DisqueExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisqueExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqueExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
