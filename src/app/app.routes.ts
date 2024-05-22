import { Routes } from '@angular/router';
import { AccueilSpaceComponent } from './accueil-space/accueil-space.component';

export const routes: Routes = [
    { path: '', component: AccueilSpaceComponent },
    { path: 'accueil', component: AccueilSpaceComponent }

];
