import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [LoginComponent, LogoutComponent],
    exports: [LoginComponent, LogoutComponent]
})

export class AuthModule { }
