import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SERVICES } from '../service/mock-services';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    RouterModule
  ],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent {
  serviceList=SERVICES;

}
