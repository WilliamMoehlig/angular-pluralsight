import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [
        `
            em {
                float: right;
                color: red;
                padding-left: 10px;
            }
        `,
    ],
})
export class LoginComponent {
    userName: string;
    password: string;

    constructor(private router: Router, private authService: AuthService) {}

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigateByUrl('/events');
    }

    cancel() {
        this.router.navigateByUrl('/events');
    }
}
