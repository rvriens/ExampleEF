"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderService_1 = require("../services/OrderService");
var ItemsComponent = (function () {
    function ItemsComponent(orderService) {
        this.orderService = orderService;
        this.items = ['1', '2', '3'];
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (res) {
            console.log("Response: " + res);
            if (Array.isArray(res)) {
                var items = res;
                items.forEach(function (x) { return _this.items.push(x.customerName); });
            }
            else {
                _this.items.push(res.customerName);
            }
        });
    };
    ItemsComponent.prototype.doKeyDown = function (itemEl) {
        console.log("Press: " + itemEl.value);
    };
    return ItemsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ItemsComponent.prototype, "label", void 0);
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'items',
        template: "\n        <ul>\n            <li *ngFor=\"let item of items\">\n                {{ label }}: <input [value]=\"item\" #itemEl (keydown)=\"doKeyDown(itemEl)\">\n            </li>\n        </ul>",
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [OrderService_1.OrderService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map