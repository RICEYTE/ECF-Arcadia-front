import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal';
import { ANIMALS } from '../animal/mock-animals';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [   
     CommonModule,
    RouterModule
  ],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.scss'
})
export class AnimalsListComponent implements OnInit{

  animalList: Animal[]| undefined;
  
    constructor(
  private router: Router,
    ){ }
  
    ngOnInit(): void {
        this.animalList = ANIMALS;
    }
    goToAnimal(animal: Animal){
   
      this.router.navigate(['/animal', animal.id]);
    }}
