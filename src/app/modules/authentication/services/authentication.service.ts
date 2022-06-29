import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay, tap} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _authenticationAPI: string = `${environment.api}user/authenticate`;

  constructor(private _http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    return this._http.post<any>(this._authenticationAPI, {username, password})
      .pipe(
        tap((response) => { console.log(response); }),
        shareReplay()
      );
  }
}
