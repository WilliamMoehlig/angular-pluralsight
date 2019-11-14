import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styles: [
        `
            em {
                float: right;
                color: #e05c65;
                padding-left: 10px;
            }
            .error {
                color: #999;
            }

            .error input {
                background-color: #e3c3c5;
            }
        `,
    ],
})
export class CreateEventComponent {
    isDirty = true;
    newEvent: IEvent;

    constructor(private router: Router, private eventService: EventService) {}

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigateByUrl('/events');
    }

    cancel() {
        this.router.navigateByUrl('/events');
    }
}
