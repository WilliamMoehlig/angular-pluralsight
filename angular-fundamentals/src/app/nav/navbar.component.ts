import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';

@Component({
    selector: 'events-navbar',
    templateUrl: './navbar.component.html',
    styles: [
        `
            .navbar-nav {
                font-size: 16;
            }
            #searchForm {
                margin-right: 100px;
            }
            .active {
                color: orange !important;
            }
            @media (max-width: 1200px) {
                #searchForm {
                    display: none;
                }
            }
        `,
    ],
})
export class NavbarComponent implements OnInit {
    events: any[];

    constructor(private eventService: EventService) {}

    ngOnInit(): void {
        this.events = this.eventService.getEventsNameId();
    }
}
