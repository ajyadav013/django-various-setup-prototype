import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule, AboutModule, HomeModule, CookieModule.forRoot(), RouterModule.forRoot(routes), SharedModule.forRoot(), AuthModule],
    declarations: [AppComponent],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    }],
    bootstrap: [AppComponent]

})
export class AppModule { }
