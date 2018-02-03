import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../user/auth.service';
import { IUser } from '../../user/user.model';
import { ISession } from '../../events/index';
import { EventService } from '../../events/shared/event.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchTerm: string = "";
  public foundSessions: ISession[];

  constructor(private authService: AuthService,
    private eventService: EventService) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  currentUser(): IUser {
    return this.authService.getCurrentUser();
  }

  public searchSessions(searchTerm: string): void {
    console.log('in searchSessions');
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        console.log('sessions', sessions);
        this.foundSessions = sessions;
        //console.log('this.foundSessions', this.foundSessions);
      }
    )
  }
}
