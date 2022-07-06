import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of, shareReplay, take, tap} from "rxjs";
import { environment } from 'src/environments/environment';
import {LoginResponse} from "../models/login-response";
import {Router} from "@angular/router";

const USER_TOKEN_KEY: string = "sessionID"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _authenticationAPI: string = `${environment.IAM_URL}/authorize`;
  private _isLoggedIn: boolean = false;

  constructor(private _http: HttpClient, private _router: Router) {}

  public login(username: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this._http.post<any>(this._authenticationAPI, formData)
      .pipe(
        tap((response: LoginResponse) => {
          this.loginUser(response);
          let loginMsg = this._isLoggedIn ? 'Login successful' : 'Login unsuccessful';
          return of(loginMsg);
        }),
        take(1),
        shareReplay(),
        catchError(AuthenticationService.handleErrors)
      );
  }

  private loginUser(loginResponse: LoginResponse): void {
    window.sessionStorage.removeItem(USER_TOKEN_KEY);
    window.sessionStorage.setItem(USER_TOKEN_KEY, JSON.stringify(loginResponse.access_token));
    this._isLoggedIn = true;
    this._router.navigate(['racs']);
  }

  public logoutUser(): void {
    window.sessionStorage.removeItem(USER_TOKEN_KEY);
    this._isLoggedIn = false;
    this._router.navigate(['login'])
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  /**
   * An error handler for requests made to the backend API
   * @param error The error returned from the response
   * @param caught
   * @private This error handler is specific to the service, and as such should have private access
   */
  private static handleErrors(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
    const status: number = error.status;
    let returnValue: any;

    switch (status) {
      case 401: returnValue = 'Authentication failed';
    }
    return of(returnValue);
  }
}
