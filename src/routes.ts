import {Routes} from '@angular/router';

import { Error404Component } from './app/errors/error404/error404.component';
import {  EventsAppComponent,
            EventsListComponent,
            CreateEventComponent,
            EventThumbnailComponent,
            EventService,
            EventListResolverService,
            EventDetailsComponent,
            EventRouteActivatorService,
            EventRouteDeactivatorService
} from './app/events/index';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteDeactivatorService]},
    {path: 'events', component: EventsListComponent, resolve: {eventsStoredInRouter: EventListResolverService} },
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];
