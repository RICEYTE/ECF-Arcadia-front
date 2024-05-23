import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal';
import { ActivatedRoute, Router } from '@angular/router';
import { ANIMALS } from '../animal/mock-animals';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [],
  templateUrl: './animal-detail.component.html',
  styleUrl: './animal-detail.component.scss'
})
export class AnimalDetailComponent implements OnInit{
  animalList: Animal[] | undefined;
  animal: Animal | undefined;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  
  ){}


  ngOnInit(): void {
    const animalId: String|null = this.route.snapshot.paramMap.get('id');

    if(animalId){
      this.animal=ANIMALS[+animalId];
      
    }
  }
  
    goToAnimalList() {
      this.router.navigate(['/animals']);
    }
  
    goToEditAnimal(animal: Animal) {
      this.router.navigate(['/edit/animal', animal.id]);
    }
  }

