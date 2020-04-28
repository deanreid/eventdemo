import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {userRoutes} from './routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component'

@NgModule({
  declarations: [  
    ProfileComponent,
    LoginComponent
  ],
  imports: [   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    RouterModule.forChild(userRoutes) 
    
  ],
  exports:[
    
  ],
  providers: []
})
export class UserModule { }
