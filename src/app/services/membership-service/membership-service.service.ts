import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MembershipServiceService {

  private _userAPI: string = `${environment.IAM_URL}user`

  constructor(private _http: HttpClient) { }

  public createUser(user: User): Observable<any> {
    return this._http.put<any>(this._userAPI, user, {withCredentials: true})
      .pipe(
        catchError(MembershipServiceService.handleErrors)
      );
  }

  public getAllMembers(): Observable<User[]> {
    return this._http.get<User[]>(`${this._userAPI}/all`, {withCredentials: true}).pipe(
      catchError(MembershipServiceService.handleErrors)
    );
  }

  /**
   * An error handler for requests made to the backend API
   * @param error The error returned from the response
   * @param caught
   * @private This error handler is specific to the service, and as such should have private access
   */
  private static handleErrors(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
    console.log(error);
    const status: number = error.status;
    let returnValue: any;

    switch (status) {
      case 401: returnValue = 'Authentication failed';
    }
    return of(returnValue);
  }
}
