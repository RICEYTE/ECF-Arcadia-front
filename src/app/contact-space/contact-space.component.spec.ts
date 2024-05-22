import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSpaceComponent } from './contact-space.component';

describe('ContactSpaceComponent', () => {
  let component: ContactSpaceComponent;
  let fixture: ComponentFixture<ContactSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
