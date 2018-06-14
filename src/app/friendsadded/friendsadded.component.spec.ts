import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsaddedComponent } from './friendsadded.component';

describe('FriendsaddedComponent', () => {
  let component: FriendsaddedComponent;
  let fixture: ComponentFixture<FriendsaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
