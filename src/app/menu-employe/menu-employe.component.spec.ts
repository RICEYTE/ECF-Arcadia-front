import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmployeComponent } from './menu-employe.component';

describe('MenuEmployeComponent', () => {
  let component: MenuEmployeComponent;
  let fixture: ComponentFixture<MenuEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
