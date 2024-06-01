import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVisiteurComponent } from './menu-visiteur.component';

describe('MenuVisiteurComponent', () => {
  let component: MenuVisiteurComponent;
  let fixture: ComponentFixture<MenuVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuVisiteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
