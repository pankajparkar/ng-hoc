import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithRouterComponent } from './with-router.component';

describe('WithRouterComponent', () => {
  let component: WithRouterComponent;
  let fixture: ComponentFixture<WithRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
