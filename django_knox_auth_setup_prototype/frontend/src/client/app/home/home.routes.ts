import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard, SocialGuard } from '../shared/service/index';

export const HomeRoutes: Route[] = [
    {
        path: '',
        pathMatch:'full',
        component: HomeComponent,
        canActivate: [AuthGuard, SocialGuard]
    }];
