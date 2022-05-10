import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesRepositoryService } from '../movies/services/movies-repository.service';
import { Movie } from '../movies/models/movie.model';
import { FadeIn } from '../shared/animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  animations: [
    FadeIn
  ]
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = null;
  error: string = null;
  modalRef: BsModalRef;
  
 
  constructor(private sanitizer: DomSanitizer,private modalService: BsModalService,
    private moviesRepositoryService: MoviesRepositoryService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getMovie(+id);
  }

  getMovie(id: number) {
    this.moviesRepositoryService.getMovieById(id)
    .subscribe(
      data => this.movie = data,
      err => this.error = err
    );
  }
  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }
  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
  getPreviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl('https://www.youtube.com/watch?v=QkZxoko_HC0'));
  }
}
