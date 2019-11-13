import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastService } from '../shared/toast.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
    events: any[];
    constructor(
        private eventService: EventService,
        private toastService: ToastService
    ) {}

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastService.success(eventName);
    }
}
