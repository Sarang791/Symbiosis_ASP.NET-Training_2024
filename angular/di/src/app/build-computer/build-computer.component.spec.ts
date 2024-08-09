import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildComputerComponent } from './build-computer.component';

describe('BuildComputerComponent', () => {
  let component: BuildComputerComponent;
  let fixture: ComponentFixture<BuildComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildComputerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
