import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppreilComponent } from './single-appreil.component';

describe('SingleAppreilComponent', () => {
  let component: SingleAppreilComponent;
  let fixture: ComponentFixture<SingleAppreilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAppreilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAppreilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
