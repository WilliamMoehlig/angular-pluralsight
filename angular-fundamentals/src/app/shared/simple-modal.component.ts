import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'events-simple-modal',
    template: `
        <div
            id="{{ elementId }}"
            #modalContainer
            class="modal fade"
            tabindex="-1"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ title }}</h4>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" (click)="closeModal()">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .modal-body {
                height: 250px;
                overflow-y: auto;
            }
            .modal-content {
                background-color: #343a40;
            }
        `,
    ],
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;

    @ViewChild('modalContainer', undefined) containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {}

    closeModal() {
        if (this.closeOnBodyClick !== 'false') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}
