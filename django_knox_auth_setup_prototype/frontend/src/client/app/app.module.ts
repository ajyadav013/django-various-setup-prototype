import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule, AboutModule, HomeModule, RouterModule.forRoot(routes), SharedModule.forRoot()],
    declarations: [AppComponent],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    },CookieService],
    bootstrap: [AppComponent]

})
export class AppModule { }
