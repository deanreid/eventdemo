import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new  FormControl(''),
    lastName: new FormControl('')
  });
  constructor(private auth:AuthService, private router: Router ) { }
   
  ngOnInit(): void {
   // console.log(this.auth)
  //  this.profileForm.setValue({firstName: this.auth.currentUser.firstName})
  //     this.profileForm.patchValue({
  //       firstName: this.auth.currentUser.firstName,
  //       lastName: this.auth.currentUser.lastName
  //     })
    
  }
 saveProfile(formValues){
   this.auth.updateCurrentUser(formValues.firstName,formValues.lastName)
 }

 cancel(): void {
   this.router.navigate(['events'])
 }
}
