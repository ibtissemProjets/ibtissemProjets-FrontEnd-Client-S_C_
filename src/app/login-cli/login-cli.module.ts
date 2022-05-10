import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginCliService } from '../services/login-cli.service';

import { SharedModule } from '../shared/shared.module';
import { LoginCliComponent } from './login-cli.component';
 

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      
      { path: 'login', component: LoginCliComponent },
  
    ]),
  ],
  declarations: [LoginCliComponent],
  exports: [ ],
  providers: [ LoginCliService]
})

export class LoginModule { }
