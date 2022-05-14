import { Movie } from './../../interface/movie';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarousselService } from '../services/caroussel.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class MoviesSliderComponent implements OnInit {
  @Input() limit: number;
  movies: Movie[];
  public data = [];
  images = []

  current = 0;
  // img_list = [
  //   'https://picsum.photos/600/400/?image=0',
  //   'https://picsum.photos/600/400/?image=1',
  //   'https://picsum.photos/600/400/?image=2',
  // ];

  constructor(private db: DatabaseService,private carousselservices:CarousselService) { }

  ngOnInit() {
    this.data = [];
    this.carousselservices.getPhoto().subscribe(res => {
      console.log(res['data']);
      for (const dd of res['data']) {
       var imgURL = btoa(
          dd.data.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
       )
       this.images.push({id: dd.article_id, description: dd.description, url: imgURL});
    
      }
      setInterval(() => {
        this.current = ++this.current % this.images.length;
      }, 2000);
    })
  }

  getMovies() {
    this.db.getMovies(this.limit).subscribe(movies => this.movies = movies);;
  }

  getArticle() {
    
  }
}
