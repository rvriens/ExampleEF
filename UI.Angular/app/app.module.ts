import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ItemsComponent } from './components/items.component';
import { TestItemComponent } from './components/testitem.component';

import { OrderService, WEBAPI_URL } from './services/OrderService';
import { AuthService, AUTH_URL } from './services/AuthService';
import { HttpModule } from '@angular/http';



@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, ItemsComponent, TestItemComponent],
  bootstrap:    [ AppComponent ],
  providers: [OrderService, AuthService,
      { provide: WEBAPI_URL, useValue: 'http://localhost:58720/api/' },
      { provide: AUTH_URL, useValue: 'http://localhost:58720/token' },
  ]

})
export class AppModule { }
