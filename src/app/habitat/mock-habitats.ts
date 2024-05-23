import { ANIMALS, ANIMALS_Birds } from "../animal/mock-animals";
import { Habitat } from "./habitat";

export const HABITATS:Habitat[]=[

    {
        id: 1,
        name: "Jungle"​,
        description: "",
        picture: "assets/images/habitats/jungle.jpeg",
        animals: ANIMALS
  
    },
    {
        id: 2,
        name: "Savane",
        description: "",
        picture: "assets/images/habitats/savane.jpeg",
        animals: ANIMALS_Birds
    },
    {
        id: 2,
        name: "Marais",
        description: "",
        picture: "assets/images/habitats/marais.jpeg",
        animals: ANIMALS_Birds
    }
];