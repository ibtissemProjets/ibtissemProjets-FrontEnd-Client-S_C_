import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MoviesModule } from './movies/movies.module';
import { appRoutes } from './routes';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesDetailModule } from './movie-detail/movie-detail.module';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DatabaseService } from './movies/services/database.service';
import { InscriClientComponent } from './inscri-client/inscri-client.component';
import { LoginCliComponent } from './login-cli/login-cli.component';
import { LoginModule } from './login-cli/login-cli.module';
import { RegisterModule } from './inscri-client/inscri-client.module';
import { InscriCliService } from './services/inscri-cli.service';
import { LoginCliService } from './services/login-cli.service';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    CoreModule,
    SharedModule,
    MoviesModule,
    MoviesDetailModule,
    ContactModule,
    LoginModule,
    RegisterModule,

  ],
  declarations: [
    AppComponent,
    MovieDetailComponent,

 
     
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
