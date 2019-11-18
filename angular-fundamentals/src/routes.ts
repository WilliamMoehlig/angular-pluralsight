import { Route } from '@angular/router';

import {
    EventsListComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    EventResolver,
} from './app/events/index';

import { Error404Component } from './app/errors/404.component';

export const appRoutes: Route[] = [
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'],
    },
    {
        path: 'events/:id',
        component: EventDetailComponent,
        resolve: { event: EventResolver },
        canActivate: [EventRouteActivator],
    },
    {
        path: 'events',
        component: EventsListComponent,
        resolve: {
            events: EventListResolver,
        },
    },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: () =>
            import('./app/user/user.module').then(m => m.UserModule),
    },
    { path: '**', redirectTo: '/404' },
];
