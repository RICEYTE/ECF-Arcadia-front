import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatSpaceComponent } from './habitat-space.component';

describe('HabitatSpaceComponent', () => {
  let component: HabitatSpaceComponent;
  let fixture: ComponentFixture<HabitatSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitatSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitatSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
