import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './registration/registration.component';
import {SecuredComponent} from './secured/secured.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BasicAuthInterceptor} from "./_shared/_helpers/basic-auth.interceptor";
import {ErrorAuthInterceptor} from "./_shared/_helpers/error-auth.interceptor";

function ErrorInterceptor() {

}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    SecuredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
