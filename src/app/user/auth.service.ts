import { Injectable } from '@angular/core';

import { IUser } from './user.model';


@Injectable()
export class AuthService {
  currentUser: IUser;
  constructor() { }

  loginUser(userName: string, password: string): void {

    this.currentUser = {
      id: 1,
      userName: 'RichardH',
      firstName: 'Richard',
      lastName: 'Head'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): IUser {
    return this.currentUser;
  }

}
