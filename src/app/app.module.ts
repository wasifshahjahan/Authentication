import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './account/register.component';
import { LoginComponent } from './account/login.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
    declarations: [AppComponent,AccountComponent, RegisterComponent, LoginComponent,UserComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
