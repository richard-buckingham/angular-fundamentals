import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  EventsAppComponent,
          EventsListComponent,
          CreateEventComponent,
          EventThumbnailComponent,
          EventService,
          EventListResolverService,
          EventDetailsComponent,
          EventRouteActivatorService,
          EventRouteDeactivatorService
} from './events/index';

import { NavbarComponent } from './nav/navbar/navbar.component';
import { Error404Component } from './errors/error404/error404.component';

import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';

import { appRoutes } from '../routes';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService,
              EventRouteActivatorService, EventRouteDeactivatorService,
              EventListResolverService, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
