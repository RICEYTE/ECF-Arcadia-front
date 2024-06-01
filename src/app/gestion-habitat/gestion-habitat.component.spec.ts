import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHabitatComponent } from './gestion-habitat.component';

describe('GestionHabitatComponent', () => {
  let component: GestionHabitatComponent;
  let fixture: ComponentFixture<GestionHabitatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionHabitatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
