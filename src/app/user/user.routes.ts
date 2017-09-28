import {Routes} from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

// user/profile
export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
];
