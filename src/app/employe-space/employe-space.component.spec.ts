import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeSpaceComponent } from './employe-space.component';

describe('EmployeSpaceComponent', () => {
  let component: EmployeSpaceComponent;
  let fixture: ComponentFixture<EmployeSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
