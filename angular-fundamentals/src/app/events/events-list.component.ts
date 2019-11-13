import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastService } from '../shared/toast.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(
        private route: ActivatedRoute,
        private toastService: ToastService
    ) {}

    ngOnInit() {
        this.events = this.route.snapshot.data.events;
    }

    handleThumbnailClick(eventName) {
        this.toastService.success(eventName);
    }
}
