import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-collapsible-well',
    template: `
        <div (click)="toggleContent()" class="card card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p [hidden]="!visible" class="card-text">
                <ng-content></ng-content>
            </p>
        </div>
    `,
})
export class CollapsibleWellComponent {
    @Input() title: string;
    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
