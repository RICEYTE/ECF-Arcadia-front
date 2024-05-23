import { Routes } from '@angular/router';
import { AccueilSpaceComponent } from './accueil-space/accueil-space.component';
import { ServiceSpaceComponent } from './service-space/service-space.component';
import { HabitatSpaceComponent } from './habitat-space/habitat-space.component';
import { ContactSpaceComponent } from './contact-space/contact-space.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HabitatsListComponent } from './habitats-list/habitats-list.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { HabitatsDetailComponent } from './habitats-detail/habitats-detail.component';

export const routes: Routes = [
    { path: '', component: AccueilSpaceComponent },
    { path: 'accueil', component: AccueilSpaceComponent },
    { path: 'services', component: ServiceSpaceComponent },
    { path: 'habitats', component: HabitatsListComponent },
    { path: 'contact', component: ContactSpaceComponent },
    { path: 'animals', component: AnimalsListComponent },
    { path: 'animal/:id', component: AnimalDetailComponent },
    { path: 'habitat/:id', component: HabitatsDetailComponent },
    { path: '**', component: PageNotFoundComponent }

];
