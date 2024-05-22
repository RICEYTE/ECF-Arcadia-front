import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSpaceComponent } from './service-space.component';

describe('ServiceSpaceComponent', () => {
  let component: ServiceSpaceComponent;
  let fixture: ComponentFixture<ServiceSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
