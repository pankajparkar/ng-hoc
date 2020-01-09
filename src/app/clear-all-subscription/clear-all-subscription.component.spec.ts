import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllSubscriptionComponent } from './clear-all-subscription.component';

describe('ClearAllSubscriptionComponent', () => {
  let component: ClearAllSubscriptionComponent;
  let fixture: ComponentFixture<ClearAllSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearAllSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearAllSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
