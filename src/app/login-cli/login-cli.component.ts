import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCliService, TokenPayload } from '../services/login-cli.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-login-cli',
  templateUrl: './login-cli.component.html',
  styleUrls: ['./login-cli.component.scss']
})
export class LoginCliComponent implements OnInit {
  credentials: TokenPayload ={
    "id":0,
    "first_name": '',
    "last_name": '',
    "email": '',
    "password": '',
}
  loginCliForm: FormGroup;
  submitted = false;
  modalRef: any;
  isLoading = false;

  users = new User();
  //////////////////

  error_messages = {

    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' },
    ],

    password: [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
  };
  ///////////////////

  constructor(private loginService: LoginCliService, private formBuilder: FormBuilder, private router: Router) {
    this.loginCliForm = this.formBuilder.group({
      email: [null, Validators.required,],
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
      ])),
    });
  }

  ngOnInit() {
 
  }

  login() {
  
    // this.users = this.loginCliForm.value
    // console.log("test", this.users)
    this.loginService.login(this.credentials).subscribe(
      (data) => {
        // this.isLoading = false;
        console.log(data)
       
        localStorage.setItem('connected',"true")
        localStorage.setItem('UserId',data.user.id)
        localStorage.setItem('Username',data.user.username)
        this.router.navigateByUrl('/')
       
      },
      err => {
        console.log(err)
        console.error(err)

      }
    )
  }
}
