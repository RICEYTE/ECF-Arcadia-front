import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVeterinaireComponent } from './menu-veterinaire.component';

describe('MenuVeterinaireComponent', () => {
  let component: MenuVeterinaireComponent;
  let fixture: ComponentFixture<MenuVeterinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuVeterinaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
