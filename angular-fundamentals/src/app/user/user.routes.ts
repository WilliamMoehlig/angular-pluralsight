import { ProfileComponent } from './profile.component';
import { Route } from '@angular/router';
import { LoginComponent } from './login.component';

export const userRoutes: Route[] = [
    { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
];
