import { Component, OnInit } from '@angular/core';
import { HABITATS } from '../habitat/mock-habitats';
import { Habitat } from '../habitat/habitat';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-habitats-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbCarousel,
    NgFor
    
  ],
  templateUrl: './habitats-list.component.html',
  styleUrl: './habitats-list.component.scss'
})

export class HabitatsListComponent implements OnInit{
  constructor(
    private router: Router
  ){

  }

  habitatsList:Habitat[] | undefined;

ngOnInit(): void {
    this.habitatsList=HABITATS;
}

goToHabitat(habitat: Habitat) {
  this.router.navigate(['/habitat',habitat.id]);
}
}
