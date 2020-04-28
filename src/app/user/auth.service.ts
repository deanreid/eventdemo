import { Injectable, OnInit } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  
  currentUser: IUser
  constructor() { }

  ngOnInit(): void {
    // this.currentUser.id=0
    // this.currentUser.firstName=''
    // this.currentUser.lastName=''
    // this.currentUser.isAuthenticated = false
  }

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: 'dreid',
      lastName: 'Reid',
      firstName: 'Dean',
      isAuthenticated: true
    }
    return this.currentUser
  }
  
  isAuthenticated() {
    return !!this.currentUser
  }

  updateCurrentUser(firstName: string, lastName: string) {
    console.log(firstName + ' ' + lastName)
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
    console.log(this.currentUser)
    //  this.currentUser.lastName = firstName
    //  this.currentUser.lastName = lastName
  }
}
