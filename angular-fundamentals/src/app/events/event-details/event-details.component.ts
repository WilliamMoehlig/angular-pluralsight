import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared';

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
            .a {
                cursor: pointer;
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
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';

    ngOnInit(): void {
        this.route.data.subscribe(data => {
            this.event = data.event;
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        let nextId = 0;
        if (this.event.sessions.length > 0) {
            nextId = Math.max.apply(
                null,
                this.event.sessions.map(s => s.id)
            );
        }

        session.id = nextId + 1;
        this.event.sessions.push(session);

        this.eventService.saveEvent(this.event).subscribe(() => {
            this.addMode = false;
        });
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
