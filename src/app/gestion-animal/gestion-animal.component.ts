import { Component, Input } from '@angular/core';
import { AnimalDetailComponent } from "../animal-detail/animal-detail.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-gestion-animal',
    standalone: true,
    templateUrl: './gestion-animal.component.html',
    styleUrl: './gestion-animal.component.scss',
    imports: [
      AnimalDetailComponent,
      CommonModule,
    RouterModule]
})
export class GestionAnimalComponent {
@Input() animalName:String | undefined;
}
