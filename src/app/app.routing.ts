import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'admin', component: AdminHomeComponent },
    { path: 'user',  component:  UserHomeComponent },
    
    // otherwise redirect to Login
    { path: '**', redirectTo: 'LoginComponent' },
    { path: '',
        redirectTo: '/login', 
        pathMatch: 'full'
    },
    //     { path: '/',
    //     redirectTo: '/login', 
    //     pathMatch: 'full'
    // }
];
export const routing = RouterModule.forRoot(appRoutes);