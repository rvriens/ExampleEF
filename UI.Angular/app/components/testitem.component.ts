

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../services/OrderService';

@Component({
    selector: 'testitem',
    template: `<div>
            {{ label }}
            <input type="text" #inputEl >
            <button (click)="this.onClickedMe(inputEl)">click me</button>
        <div>`,
    moduleId: module.id
})
export class TestItemComponent implements OnInit {
    @Input() label: string;
    @Output() dochange: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }
    
    onClickedMe(itemEl: HTMLInputElement) {
        this.dochange.emit(itemEl.value);
    }
}