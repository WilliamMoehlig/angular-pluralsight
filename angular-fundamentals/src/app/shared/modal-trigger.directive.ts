import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[events-modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('events-modal-trigger') modalTrigger: string;
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalTrigger}`).modal({});
        });
    }
}
