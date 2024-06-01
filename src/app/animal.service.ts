import { Injectable } from '@angular/core';
import { ANIMALS } from './animal/mock-animals';
import { Animal } from './animal/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getAnimalByName(animalName: string):Animal| null{

    var existAnimal=false;
    var index=0;
    

    while(!existAnimal && ANIMALS.length > index){

      existAnimal=(ANIMALS[index].name == animalName)
      index++;
      
    }

    if(existAnimal){
      console.log("animal trouvé: "+ANIMALS[--index].name+" index: "+ index)
      return ANIMALS[index];
    }
    else{
      return null;
    }


  }
}
