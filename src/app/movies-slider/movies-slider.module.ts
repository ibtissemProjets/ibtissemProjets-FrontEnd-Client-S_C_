import { NgModule } from '@angular/core';
import { DatabaseService } from '../movies/services/database.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ ],
  exports: [ ],
  providers: [DatabaseService ]
})

export class MoviesSliderComponent { }
