import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AVIS } from '../avis/mock-avis';

@Component({
  selector: 'app-avis-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './avis-list.component.html',
  styleUrl: './avis-list.component.scss'
})
export class AvisListComponent {
  avisList=AVIS;
}
