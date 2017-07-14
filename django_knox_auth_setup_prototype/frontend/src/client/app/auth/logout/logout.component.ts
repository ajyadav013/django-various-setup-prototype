import { Component } from '@angular/core';
import { AuthService } from '../../shared/service/index';

@Component({
    moduleId: module.id,
    selector: 'log-out',
    template: `
        <button  (click)="logout()" class="btn btn-primary">Logout</button>`
})
export class LogoutComponent {
    constructor(private authService : AuthService) { }
    logout() {
        this.authService.logout();
    }
}
