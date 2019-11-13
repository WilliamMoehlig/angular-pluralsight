import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'events-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [
        `
            .thumbnail {
                min-height: 210px;
            }
            .well div {
                color: #bbb;
            }
            .pad-left {
                margin-left: 10px;
            }
        `,
    ],
})
export class EventsThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am') {
            return {
                color: 'green',
                'font-weight': 'bold',
            };
        }
        return {};
    }
}
