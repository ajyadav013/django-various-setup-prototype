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
            'clientId':'852427901588841',
            'provider':'facebook',
            'redirectURI' : Config.REDIRECTURL+'admin'
        }
    };
    constructor(public socialService:SocialService) { }
    facebookLogin() {
        console.log('Inside facebook login');
        this.socialService.auth('facebook',this.socialAuthConfig);
    }
}
