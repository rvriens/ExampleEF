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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var AuthService_1 = require("./AuthService");
// export var WEBAPI_URL: string = 'http://localhost:58720/api/';
// 1. Create token
exports.WEBAPI_URL = new core_1.OpaqueToken('app.webapi_url');
var OrderService = (function () {
    function OrderService(http, authService, apiUrl) {
        this.http = http;
        this.authService = authService;
        this.apiUrl = apiUrl;
    }
    OrderService.prototype.getOrders = function () {
        var _this = this;
        var event = new core_1.EventEmitter();
        this.authService.getToken().subscribe(function (token) {
            var headers = new http_1.Headers();
            headers.append("Authorization", "Bearer " + token);
            var queryUrl = _this.apiUrl + "Orders";
            _this.http.get(queryUrl, { headers: headers }).subscribe(function (res) { return _this.procesResponse(event, res); });
        });
        return event;
    };
    OrderService.prototype.procesResponse = function (event, response) {
        event.emit(response.json());
    };
    return OrderService;
}());
OrderService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(exports.WEBAPI_URL)),
    __metadata("design:paramtypes", [http_1.Http,
        AuthService_1.AuthService, String])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map