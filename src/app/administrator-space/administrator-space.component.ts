import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit,  } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Animal } from '../animal/animal';
import { ANIMALS } from '../animal/mock-animals';


@Component({
    selector: 'app-administrator-space',
    standalone: true,
    templateUrl: './administrator-space.component.html',
    styleUrl: './administrator-space.component.scss',
    imports: [
        CommonModule
    ]
})


export class AdministratorSpaceComponent implements OnInit,OnChanges{

    animal: Animal | undefined | null;
    isAnimalValid: boolean | undefined|false;
    animalName: string | null | undefined;
    
    constructor(
    
    ){}

    ngOnInit(): void {

    }


    getAnimal():Animal|null {
        if (this.animalName){
           return this.animal=ANIMALS[1];
        }
        else{
            return null;
        }
        
    }
    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        
    }
    
}


