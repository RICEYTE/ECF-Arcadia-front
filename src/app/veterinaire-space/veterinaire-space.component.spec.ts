import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireSpaceComponent } from './veterinaire-space.component';

describe('VeterinaireSpaceComponent', () => {
  let component: VeterinaireSpaceComponent;
  let fixture: ComponentFixture<VeterinaireSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinaireSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinaireSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
