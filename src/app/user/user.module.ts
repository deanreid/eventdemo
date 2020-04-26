import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {userRoutes} from './routes';
import { ProfileComponent } from './profile.component'
//import { NavbarComponent } from '../nav/navbar.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: []
})
export class UserModule { }
