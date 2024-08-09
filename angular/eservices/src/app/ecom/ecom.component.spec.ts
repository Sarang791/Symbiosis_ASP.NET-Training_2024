import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomComponent } from './ecom.component';

describe('EcomComponent', () => {
  let component: EcomComponent;
  let fixture: ComponentFixture<EcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
