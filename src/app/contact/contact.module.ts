import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    
    SharedModule,
    RouterModule.forChild([
      
      { path: 'contact', component: ContactComponent },
  
    ]),
  ],
  declarations: [ContactComponent],
  exports: [ ],
  providers: [ ]
})

export class ContactModule { }
