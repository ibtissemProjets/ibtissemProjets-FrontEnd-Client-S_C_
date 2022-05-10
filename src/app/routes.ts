import { Routes } from '@angular/router';
import { InscriClientComponent } from './inscri-client/inscri-client.component';
import { LoginCliComponent } from './login-cli/login-cli.component';
import { MoviesComponent } from './movies/movies.component';

export const appRoutes: Routes = [
  { path: '', component: MoviesComponent, },
  { path: 'movies', loadChildren: './movies/movies.module#MoviesModule'},
 
  { path: 'contact', loadChildren: () =>import ('./contact/contact.module').then(m => m.ContactModule)},


  
  
];
