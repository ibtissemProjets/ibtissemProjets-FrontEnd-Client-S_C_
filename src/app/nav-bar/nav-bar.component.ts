import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { InscriCliService } from '../services/inscri-cli.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  Username
  connected
  /////////////////////////
  constructor() {
    this.Username = localStorage.getItem("Username")
    this.connected = localStorage.getItem("connected")
   }
  ngOnInit() {

  }

}
