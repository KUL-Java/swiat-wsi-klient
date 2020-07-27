import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {LoginUser} from "../model/login-user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<LoginUser>;
  public user: Observable<LoginUser>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  public get userValue(): LoginUser {
    return this.userSubject.value;
  }

  login(username: string, password: string): Observable<void> {
    return this.http.post<any>(`${environment.apiUrl}/login`, {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(window.btoa(username + ':' + password)));
      }));
  }
}
