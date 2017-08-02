// Social Component

import { Component, OnInit } from '@angular/core';
import { SocialService } from './social.service';
import { Config } from '../shared/config/env.config';

@Component({
    moduleId: module.id,
    selector: 'social-app',
    templateUrl: 'social.component.html',
    styleUrls: ['social.component.css'],
})
export class SocialComponent {
    private socialAuthConfig = {
        'facebook':{
            'authEndpoint': Config.APIURL+'social',
            'clientId':Config.FACEBOOKCLIENTID,
            'provider':'facebook',
            'redirectURI' : Config.REDIRECTURL
        }
    };
    constructor(public socialService:SocialService) {
        console.log('config', this.socialAuthConfig);
    }
    facebookLogin() {
        console.log('Inside facebook login');
        this.setSocialProvider('facebook');
        this.socialService.auth('facebook',this.socialAuthConfig);
    }

    setSocialProvider(provider:string) {
        localStorage.setItem('socialProvider', provider);
    }
}
