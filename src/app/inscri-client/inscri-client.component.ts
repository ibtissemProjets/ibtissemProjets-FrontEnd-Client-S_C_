import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriCliService } from '../services/inscri-cli.service';
import { User } from '../shared/models/User';
import {passwordMatchValidator} from './checkPassword';


@Component({
  selector: 'app-inscri-client',
  templateUrl: './inscri-client.component.html',
  styleUrls: ['./inscri-client.component.scss']
})
export class InscriClientComponent implements OnInit {
  registerCliForm: FormGroup;
  submitted = false;
  modalRef: any;
  isLoading = false;
  //////////////////

  error_messages = {
    firstname: [{ type: 'required', message: 'Prénom obligatoire.' }],

    lastname: [{ type: '', message: 'Nom obligatoire.' }],
    pays:[{ type: '', message: 'Pays obligatoire.' }],
    ville:[{ type: '', message: 'Ville obligatoire.' }],
    dateNaiss:[{ type: '', message: 'Date naissance obligatoire.' }],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' },
    ], 
    username: [{ type: '', message: 'Nom utilisateur obligatoire.' }],

    password: [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
    confirmPassword: [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
  };
  ///////////////////

  users = new User();


  constructor(private inscriservice:InscriCliService, private formBuilder: FormBuilder,private router: Router) { 
    this.registerCliForm = this.formBuilder.group({
      
      lastname: [null, Validators.required],
      firstname: [null, Validators.required], 
      pays: [null, Validators.required,],
      ville: [null, Validators.required,],
      dateNaiss: [null, Validators.required],





      email: [null, Validators.required,],
      username:[null, Validators.required,],
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
      ])),
      confirmPassword: new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12),
      ])),
    },
    {
      validators: this.password.bind(this),
    }
    );
  }

  ngOnInit() {
  }
  get f() { return this.registerCliForm.controls }
  onSubmitClient() {
    this.isLoading = true;
    
    console.log("test")
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerCliForm.invalid) {
      return;
    }
    this.inscriservice.create(this.users).subscribe(
     ()=>{
      this.isLoading = false;
     
         this.router.navigateByUrl('/login')

     },
     err => {
         console.error(err)
     }
 )
}

onReset() {
  this.submitted = false;
  this.registerCliForm.reset();
  this.modalRef.hide()
}

password(formGroup: FormGroup) {
  const { value: password } = formGroup.get('password');
  const { value: confirmPassword } = formGroup.get('confirmPassword');
  return password === confirmPassword ? null : { passwordNotMatch: true };
}
}