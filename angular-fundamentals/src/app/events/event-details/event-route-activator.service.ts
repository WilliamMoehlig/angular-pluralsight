import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    eventExists: boolean;
    constructor(private eventService: EventService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        this.eventService.getEvent(+route.params.id).subscribe(event => {
            this.eventExists = !!event;
            if (!this.eventExists) {
                this.router.navigateByUrl('/404');
            }
        });

        return this.eventExists;
    }
}
