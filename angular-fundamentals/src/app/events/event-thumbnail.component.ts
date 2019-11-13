import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() event: any;
}
