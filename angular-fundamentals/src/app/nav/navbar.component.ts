import { Component, OnInit } from '@angular/core';

import { EventService } from '../events/shared/event.service';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events';
import { $ } from 'protractor';

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

            .list-group-item {
                background-color: #343a40;
                color: white;
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
    searchTerm = '';
    foundSessions: ISession[];

    constructor(private eventService: EventService, public auth: AuthService) {}

    ngOnInit(): void {
        this.events = this.eventService.getEventsNameId();
    }

    searchSession(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
}
