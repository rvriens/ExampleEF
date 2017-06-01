import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

export const AUTH_URL = new OpaqueToken('app.auth_url');

@Injectable()
export class AuthService
{
    private token: string;
    private username: string;
    private password: string;
    

    constructor(
        private http: Http,
        @Inject(AUTH_URL) private authUrl: string)
    {
        this.token = localStorage.getItem('authToken');
        this.username = 'admin';
        this.password = '1234';
    }

    getToken() {
        if (!this.token) {
            let headers: Headers = new Headers();
            headers.append("Content-Type", "x-www-form-urlencoded");
            headers.append("accept", "application/json");
            let authForm: string = `grant_type=password&username=${this.username}&password=${this.password}`;
            let subject: Subject<string> = new Subject();
            this.http.post(this.authUrl, authForm, { headers: headers }).subscribe((res) => this.processResponse(res, subject));
            return subject;
        }
        let subject: Subject<string> = new Subject();
        setTimeout(() => subject.next(this.token), 1);
        return subject;
       // return Subject.create(() => this.token);
        
    }

    processResponse(res: Response, subject: Subject<string> )
    {
        let token: any = res.json();
        this.token = token.access_token
        this.saveToken();
        subject.next(this.token);
        subject.complete();
    }

    private saveToken()
    {
        localStorage.setItem('authToken', this.token);
    }

}