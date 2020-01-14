import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithAddDebuggingComponent } from './with-add-debugging.component';

describe('WithAddDebuggingComponent', () => {
  let component: WithAddDebuggingComponent;
  let fixture: ComponentFixture<WithAddDebuggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithAddDebuggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithAddDebuggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
