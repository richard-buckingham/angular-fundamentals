import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../user/auth.service';
import { IUser } from '../../user/user.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  currentUser(): IUser {
    return this.authService.getCurrentUser();
  }

}
