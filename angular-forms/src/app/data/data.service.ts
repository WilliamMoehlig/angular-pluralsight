import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = 'https://putsreq.com/OlMNJIYHqSD9GjiZYI8E';
  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post(this.url, userSettings);
  }
}
