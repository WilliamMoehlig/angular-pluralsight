import { Component } from '@angular/core';

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
            @media (max-width: 1200px) {
                #searchForm {
                    display: none;
                }
            }
        `,
    ],
})
export class NavbarComponent {}
