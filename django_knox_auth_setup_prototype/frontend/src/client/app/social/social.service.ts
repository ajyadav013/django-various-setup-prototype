import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentHeaderService } from '../shared/service/index';

@Injectable()
export class SocialService {

    constructor(private _contentHeaderService:ContentHeaderService, private _http:Http) { }

    public auth(provider:string, authConfig: any):void {
        localStorage.setItem('socialAuthConfig', JSON.stringify(authConfig));
        if(provider === 'facebook') {
            window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id='+
                authConfig.facebook.clientId+'&redirect_uri='+
                authConfig.facebook.redirectURI+'&scope=email';
        }
    }

    public getUserSocialDetails(code:string):boolean {
        let config = JSON.parse(localStorage.getItem('socialAuthConfig'));
        let body = {'code' : code,'clientId' : config.clientId,'redirectUri':config.redirectURI, 'provider':config.provider};
        let options = this._contentHeaderService.getOptions(null);
        return this._http.post(Config.APIURL+'social/', body, options)
            .toPromise()
            .then((r: Response) => {
                return true;
            })
            .catch(this.handleError);
    }
}
