import { Component, OnInit } from "@angular/core";
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
      .nav.navbar-nav {font-size: 15px;}
      #searchForm {margin-righ: 100px;}
      @media (max-width: 1200px) {#searchForm {display:none}}
      a.active-link { color: #F97924 !important;}
    `]
})

export class NavbarComponent implements OnInit{
 currentUser: IUser
 isLoggedIn: boolean
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
   this.isLoggedIn = this.authService.isAuthenticated()
   this.currentUser = this.authService.currentUser;
   
  }
}

