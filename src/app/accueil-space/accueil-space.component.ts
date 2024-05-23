import { Component } from '@angular/core';
import { ANIMALS } from '../animal/mock-animals';
import { AVIS } from '../avis/mock-avis';
import { PresentationComponent } from "../presentation/presentation.component";
import { ServicesListComponent } from "../services-list/services-list.component";
import { AvisListComponent } from "../avis-list/avis-list.component";
import { AnimalsListComponent } from "../animals-list/animals-list.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HabitatsListComponent } from "../habitats-list/habitats-list.component";

@Component({
    selector: 'app-accueil-space',
    standalone: true,
    templateUrl: './accueil-space.component.html',
    styleUrl: './accueil-space.component.scss',
    imports: [
        CommonModule,
        RouterModule,
        PresentationComponent,
        ServicesListComponent,
        AvisListComponent,
        AnimalsListComponent,
        HabitatsListComponent
    ]
})
export class AccueilSpaceComponent {
  animals= ANIMALS;
  avis=AVIS;

}
