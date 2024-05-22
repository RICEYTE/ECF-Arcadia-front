import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-space',
  standalone: true,
  imports: [    
    FormsModule,
    CommonModule,
    RouterModule
  ],
    
  templateUrl: './contact-space.component.html',
  styleUrl: './contact-space.component.scss'
})
export class ContactSpaceComponent {
  
  onSubmit(){
    console.log("Not implemented");
  }
}
