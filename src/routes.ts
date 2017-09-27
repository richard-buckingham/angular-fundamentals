import {Routes} from '@angular/router';

import {EventsListComponent} from './app/events/events-list/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {EventRouteActivatorService} from './app/events/event-details/event-route-activator.service';
import {CreateEventComponent} from './app/events/create-event/create-event.component';
import {Error404Component} from './app/errors/error404/error404.component';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'events', pathMatch: 'full'}
];
