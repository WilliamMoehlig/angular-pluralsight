import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser } from './user.model';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient) {}

    loginUser(userName: string, password: string) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        const loginInfo = {
            username: userName,
            password,
        };

        return this.http.post('/api/login', loginInfo, options).pipe(
            tap(data => {
                this.currentUser = data['user'] as IUser;
            }),
            catchError(() => {
                return of(false);
            })
        );
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http
            .get('/api/currentIdentity')
            .pipe(
                tap(data => {
                    if (data instanceof Object) {
                        this.currentUser = data as IUser;
                    }
                })
            )
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        const url = `/api/users/${this.currentUser.id}`;

        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        return this.http.put(url, this.currentUser, options);
    }

    logout() {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };

        this.currentUser = undefined;

        return this.http.post('/api/logout', {}, options);
    }
}
