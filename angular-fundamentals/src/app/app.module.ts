import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventService,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    VoterService,
    UpvoteComponent,
    LocationValidator,
    EventResolver,
} from './events/index';

import { EventsAppComponent } from './events-app.components';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import {
    TOASTR_TOKEN,
    Toastr,
    JQ_TOKEN,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
} from './shared/index';

import { AuthService } from './user/auth.service';

import { appRoutes } from '../routes';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        UserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator,
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventListResolver,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        AuthService,
        VoterService,
        EventResolver,
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
