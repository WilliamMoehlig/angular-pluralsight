import { Component } from '@angular/core';

@Component({
    selector: 'events-collapsible-well',
    template: `
        <div (click)="toggleContent()" class="card card-body">
            <h4 class="card-title">
                <ng-content select="[card-title]"></ng-content>
            </h4>
            <p [hidden]="!visible" class="card-text">
                <ng-content select="[card-body]"></ng-content>
            </p>
        </div>
    `,
})
export class CollapsibleWellComponent {
    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
