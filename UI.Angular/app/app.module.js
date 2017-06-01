"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var items_component_1 = require("./components/items.component");
var testitem_component_1 = require("./components/testitem.component");
var OrderService_1 = require("./services/OrderService");
var AuthService_1 = require("./services/AuthService");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, items_component_1.ItemsComponent, testitem_component_1.TestItemComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [OrderService_1.OrderService, AuthService_1.AuthService,
            { provide: OrderService_1.WEBAPI_URL, useValue: 'http://localhost:58720/api/' },
            { provide: AuthService_1.AUTH_URL, useValue: 'http://localhost:58720/token' },
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map