import { Http, Headers, Response } from '@angular/http';
import { Inject, Injectable, OpaqueToken, EventEmitter } from '@angular/core';
import { AuthService } from './AuthService';


// export var WEBAPI_URL: string = 'http://localhost:58720/api/';

// 1. Create token
export const WEBAPI_URL = new OpaqueToken('app.webapi_url');


@Injectable()
export class OrderService
{
    constructor(
        private http: Http,
        private authService: AuthService,
        @Inject(WEBAPI_URL) private apiUrl: string)
    {
    }

    getOrders()
    {
        let event: EventEmitter<any> = new EventEmitter();
        this.authService.getToken().subscribe((token: string) => {
            let headers = new Headers();
            headers.append("Authorization", `Bearer ${token}`);
            let queryUrl = `${this.apiUrl}Orders`;
            this.http.get(queryUrl, { headers: headers }).subscribe(res => this.procesResponse(event, res));
        });
        return event;
    }


    private procesResponse(event:EventEmitter<any>, response: Response): void
    {
        event.emit(response.json());
    }
}