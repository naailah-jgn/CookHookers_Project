import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMobileComponent } from './pre-mobile.component';

describe('PreMobileComponent', () => {
  let component: PreMobileComponent;
  let fixture: ComponentFixture<PreMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreMobileComponent]
    });
    fixture = TestBed.createComponent(PreMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
