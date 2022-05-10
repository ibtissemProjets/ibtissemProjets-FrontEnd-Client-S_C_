import { Movie } from './../../interface/movie';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss']
})
export class MoviesSliderComponent implements OnInit {
  @Input() limit: number;
  movies: Movie[];
  images = [
    {path: 'assets/movies/we-are-the-millers-cover.jpg'},
    {path: 'assets/movies/american-gangster-cover.jpg'},
    {path: 'assets/movies/jurassic-world.jpg'},
    {path: 'assets/movies/tracers-cover.jpg'},
  ]

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.db.getMovies(this.limit).subscribe(movies => this.movies = movies);;
  }
}
