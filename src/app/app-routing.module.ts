import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register.component';
import { LoginComponent } from './account/login.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
    {
        path: 'account', component: AccountComponent, children: [
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent, data: { title: "Route" } },
            { path: 'user', component: UserComponent, canActivate: [AuthGuard] }

        ]
    },
    { path: '', redirectTo: '/account', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent, data: { title: "Route" } },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard, UserService]
})
export class AppRoutingModule { }
