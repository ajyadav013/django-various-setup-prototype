import { Injectable } from '@angular/core';


@Injectable()
export class SocialService {
    public auth(provider:string, authConfig: any):void {
        if(provider === 'facebook') {
            window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id='+
                authConfig.facebook.clientId+'&redirect_uri='+
                authConfig.facebook.redirectURI+'&scope=email';
        }
    }
}
