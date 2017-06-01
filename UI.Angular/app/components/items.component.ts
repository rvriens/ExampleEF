import { Component, OnInit, Input, Output } from '@angular/core';
import { OrderService } from '../services/OrderService';

@Component({
    selector: 'items',
    template: `
        <ul>
            <li *ngFor="let item of items">
                {{ label }}: <input [value]="item" #itemEl (keydown)="doKeyDown(itemEl)">
            </li>
        </ul>`,
    moduleId: module.id
})
export class ItemsComponent implements OnInit {
    items: string[];
    @Input() label: string;

    constructor(private orderService: OrderService) {
        this.items = ['1', '2', '3'];
    }

    ngOnInit() {
        this.orderService.getOrders().subscribe(
            (res: any) => {
                console.log(`Response: ${res}`);
                if (Array.isArray(res))
                {
                    let items = <Array<any>>res;
                    items.forEach((x) => this.items.push(x.customerName));
                } else {
                    this.items.push(res.customerName)
                }
            }
        );
    }



    doKeyDown(itemEl: HTMLInputElement) {
        console.log(`Press: ${itemEl.value}`);
    }
}