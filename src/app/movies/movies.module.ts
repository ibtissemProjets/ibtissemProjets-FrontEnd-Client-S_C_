import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesComponent } from './movies.component';
import { MoviesRepositoryService } from './services/movies-repository.service';
import { SharedModule } from '../shared/shared.module';
import { EnumToArrayPipe } from './pipes/enumToArray.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterMoviesService } from './services/filter-movies.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ContactComponent } from '../contact/contact.component';
import { MoviesSliderComponent } from '../movies-slider/movies-slider.component';
 import { DatabaseService } from './services/database.service';
import { ModalModule  } from 'ngx-bootstrap/modal';
import { IvyCarouselModule } from "angular-responsive-carousel";
@NgModule({
  imports: [
    ModalModule.forRoot(),
    IvyCarouselModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      
      { path: 'movies', component: MoviesComponent },
      { path: 'movies/:id/:title', component: MovieDetailComponent },
      // { path: 'contact', component: ContactComponent },

    ]),
    FormsModule,
    ReactiveFormsModule
   ],
  declarations: [
    
    NavBarComponent,
    MoviesSliderComponent,
    MoviesComponent,
    EnumToArrayPipe,
    FilterPipe,
    SortPipe, 
    // ContactComponent   
  ],
  exports: [ NavBarComponent,MoviesSliderComponent],
  providers: [
    HttpClientModule,
    MoviesRepositoryService,
    FilterMoviesService,
    DatabaseService,
    ModalModule 
  ]
})
export class MoviesModule { }
 