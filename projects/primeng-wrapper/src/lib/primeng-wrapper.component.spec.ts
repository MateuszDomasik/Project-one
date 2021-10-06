import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengWrapperComponent } from './primeng-wrapper.component';

describe('PrimengWrapperComponent', () => {
  let component: PrimengWrapperComponent;
  let fixture: ComponentFixture<PrimengWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
