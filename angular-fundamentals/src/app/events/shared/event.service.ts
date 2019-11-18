import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEvent } from './event.model';
import { ISession } from './session.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventService {
    constructor(private http: HttpClient) {}

    getEvents(): Observable<IEvent[]> {
        return this.http
            .get<IEvent[]>('/api/events')
            .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
    }

    getEvent(id: number): Observable<IEvent> {
        return this.http
            .get<IEvent>(`/api/events/${id}`)
            .pipe(catchError(this.handleError<IEvent>('getEvent')));
    }

    getEventsNameId() {
        return this.getEvents().pipe(
            map(events =>
                events.map(event => {
                    return { id: event.id, name: event.name };
                })
            ),
            catchError(this.handleError<IEvent>('getEventsNameId'))
        );
    }

    saveEvent(event: IEvent): Observable<IEvent> {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };

        return this.http
            .post<IEvent>('api/events', event, options)
            .pipe(catchError(this.handleError<IEvent>('saveEvent')));
    }

    // Server uses post so unused
    updateEvent(event: IEvent): Observable<IEvent> {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };

        return this.http
            .put<IEvent>('api/events', event, options)
            .pipe(catchError(this.handleError<IEvent>('saveEvent')));
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
        return this.http
            .get<ISession[]>(`api/sessions/search?search=${searchTerm}`)
            .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
