import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { InscriClientComponent } from './inscri-client.component';
import { ClarityModule } from '@clr/angular';
 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ClarityModule,
    
    RouterModule.forChild([
      
      { path: 'register', component: InscriClientComponent },
  
    ]),
  ],
  declarations: [InscriClientComponent],
  exports: [ ],
  providers: [ ]
})

export class RegisterModule { }
