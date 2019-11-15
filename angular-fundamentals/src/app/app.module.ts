import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
} from './events/index';

import { EventsAppComponent } from './events-app.components';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { CollapsibleWellComponent } from './shared/collapsible-well.component';

import { ToastService } from './shared/toast.service';
import { AuthService } from './user/auth.service';

import { appRoutes } from '../routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        UserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavbarComponent,
        EventDetailComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        ToastService,
        EventListResolver,
        EventRouteActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        AuthService,
    ],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm(
            'You have not saved this event, do you really want to cancel?'
        );
    }
    return true;
}
