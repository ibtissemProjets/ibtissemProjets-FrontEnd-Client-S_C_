import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginCliComponent } from './login-cli.component';
 

@NgModule({
  imports: [
    
    SharedModule,
    RouterModule.forChild([
      
      { path: 'login', component: LoginCliComponent },
  
    ]),
  ],
  declarations: [LoginCliComponent],
  exports: [ ],
  providers: [ ]
})

export class LoginModule { }
