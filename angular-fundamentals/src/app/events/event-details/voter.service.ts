import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {
    constructor(private http: HttpClient) {}

    addVoter(eventId: number, session: ISession, voterName: string) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http
            .post(url, {}, options)
            .pipe(catchError(this.handleError('addVoter')))
            .subscribe(() => session.voters.push(voterName));
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http
            .delete(url)
            .pipe(catchError(this.handleError('deleteVoter')))
            .subscribe(
                () =>
                    (session.voters = session.voters.filter(
                        voter => voter !== voterName
                    ))
            );
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
