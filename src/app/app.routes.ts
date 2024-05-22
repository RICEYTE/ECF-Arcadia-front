import { Routes } from '@angular/router';
import { AccueilSpaceComponent } from './accueil-space/accueil-space.component';
import { ServiceSpaceComponent } from './service-space/service-space.component';
import { HabitatSpaceComponent } from './habitat-space/habitat-space.component';
import { ContactSpaceComponent } from './contact-space/contact-space.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: AccueilSpaceComponent },
    { path: 'accueil', component: AccueilSpaceComponent },
    { path: 'services', component: ServiceSpaceComponent },
    { path: 'habitats', component: HabitatSpaceComponent },
    { path: 'contact', component: ContactSpaceComponent },
    { path: '**', component: PageNotFoundComponent }

];
