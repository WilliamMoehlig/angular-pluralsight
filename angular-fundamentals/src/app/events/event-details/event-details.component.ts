import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
            .container {
                padding-left: 20px;
                padding-right: 20px;
            }
            .event-image {
                height: 100px;
            }
        `,
    ],
})
export class EventDetailComponent implements OnInit {
    constructor(
        private eventService: EventService,
        private route: ActivatedRoute
    ) {}

    event: IEvent;

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id: number = Number(params.id);
            this.event = this.eventService.getEvent(id);
        });
    }
}
