import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilSpaceComponent } from './accueil-space.component';

describe('AccueilSpaceComponent', () => {
  let component: AccueilSpaceComponent;
  let fixture: ComponentFixture<AccueilSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
