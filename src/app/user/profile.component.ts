import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  firstName:FormControl
  lastName:FormControl
  
  constructor(private auth:AuthService, private router: Router ) { }
   
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new  FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      lastName: new FormControl('', Validators.required)
    });
    
  }
 saveProfile(formValues){
   if (this.profileForm.valid){
    this.auth.updateCurrentUser(formValues.firstName,formValues.lastName)
    this.router.navigate(['events'])
   }
  }
   
   validateFirstName(): boolean {
     return  this.profileForm.controls.firstName.valid || this.profileForm.controls.firstName.untouched
   }
   validateLastName(): boolean {
    return  this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched
  }

 cancel(): void {
   this.router.navigate(['events'])
 }
}
