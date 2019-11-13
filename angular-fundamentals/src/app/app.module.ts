import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';

import {
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver,
} from './events/index';

import { EventsAppComponent } from './events-app.components';

import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { ToastService } from './shared/toast.service';

import { appRoutes } from '../routes';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), UserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavbarComponent,
        EventDetailComponent,
        CreateEventComponent,
        Error404Component,
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        ToastService,
        EventListResolver,
        EventRouteActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    ],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm(
            'You have not saved this event, do you really want to cancel?'
        );
    }
}
