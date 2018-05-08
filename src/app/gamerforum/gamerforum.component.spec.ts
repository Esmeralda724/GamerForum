import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerforumComponent } from './gamerforum.component';

describe('GamerforumComponent', () => {
  let component: GamerforumComponent;
  let fixture: ComponentFixture<GamerforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
