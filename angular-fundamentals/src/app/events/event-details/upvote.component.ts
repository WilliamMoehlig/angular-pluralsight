import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'events-upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="card card-body votingWidget">
                <div class="votingButton">
                    <i class="fas fa-heart" [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    {{ count }}
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote: EventEmitter<object> = new EventEmitter();
    public iconColor: string;

    onClick() {
        this.vote.emit({});
    }
}
