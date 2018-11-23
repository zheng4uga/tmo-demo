import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceInfoComponent } from './allowance-info.component';

describe('AllowanceInfoComponent', () => {
  let component: AllowanceInfoComponent;
  let fixture: ComponentFixture<AllowanceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowanceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
