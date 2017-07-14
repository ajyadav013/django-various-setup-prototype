import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AuthService } from '../../shared/service/index';

class Login {
    username:string;
    password:string;
}

@Component({
    moduleId: module.id,
    selector: 'log-in',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    error:string;
    has_error:boolean;
    login_response:boolean = false;
    public credentials:Login;


    constructor( private authService: AuthService, private router: Router) {
        this.credentials = new Login();
        this.has_error = false;
    }

    ngOnInit() {
        if(!!Cookie.get('token')) {
            this.router.navigate(['']);
        }
    }

    login(credentials:Login): void {
        this.login_response = true;
        this.authService.login(credentials)
            .subscribe(
                data => this.handleSuccess(data),
                err => this.logError(err)
            );
    }

    handleSuccess(response:any) {
        if(response) {
            this.router.navigate(['']);
        }
    }

    logError(error:any) {
        this.error = error;
        this.has_error = true;
        this.login_response= false;
    }

}
