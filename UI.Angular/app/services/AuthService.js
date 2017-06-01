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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
exports.AUTH_URL = new core_1.OpaqueToken('app.auth_url');
var AuthService = (function () {
    function AuthService(http, authUrl) {
        this.http = http;
        this.authUrl = authUrl;
        this.token = localStorage.getItem('authToken');
        this.username = 'admin';
        this.password = '1234';
    }
    AuthService.prototype.getToken = function () {
        var _this = this;
        if (!this.token) {
            var headers = new http_1.Headers();
            headers.append("Content-Type", "x-www-form-urlencoded");
            headers.append("accept", "application/json");
            var authForm = "grant_type=password&username=" + this.username + "&password=" + this.password;
            var subject_1 = new Subject_1.Subject();
            this.http.post(this.authUrl, authForm, { headers: headers }).subscribe(function (res) { return _this.processResponse(res, subject_1); });
            return subject_1;
        }
        var subject = new Subject_1.Subject();
        setTimeout(function () { return subject.next(_this.token); }, 1);
        return subject;
        // return Subject.create(() => this.token);
    };
    AuthService.prototype.processResponse = function (res, subject) {
        var token = res.json();
        this.token = token.access_token;
        this.saveToken();
        subject.next(this.token);
        subject.complete();
    };
    AuthService.prototype.saveToken = function () {
        localStorage.setItem('authToken', this.token);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(exports.AUTH_URL)),
    __metadata("design:paramtypes", [http_1.Http, String])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map