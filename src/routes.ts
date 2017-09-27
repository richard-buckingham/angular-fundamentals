import {Routes} from '@angular/router';

import {EventsListComponent} from './app/events/events-list/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {EventRouteDeactivatorService} from './app/events/create-event/event-route-deactivator.service';
import {EventRouteActivatorService} from './app/events/event-details/event-route-activator.service';
import {CreateEventComponent} from './app/events/create-event/create-event.component';
import {Error404Component} from './app/errors/error404/error404.component';
import {EventListResolverService} from './app/events/shared//event-list-resolver.service';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteDeactivatorService]},
    {path: 'events', component: EventsListComponent, resolve: {eventsStoredInRouter: EventListResolverService} },
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'events', pathMatch: 'full'}
];
