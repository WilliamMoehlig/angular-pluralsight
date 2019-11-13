import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.components';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastService } from './shared/toast.service';
import { EventService } from './events/shared/event.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavbarComponent,
    ],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastService],
})
export class AppModule {}
