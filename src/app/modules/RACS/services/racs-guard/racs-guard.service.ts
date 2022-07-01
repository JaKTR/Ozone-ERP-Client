import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../../authentication/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RacsGuardService implements CanLoad, CanActivate, CanActivateChild {

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.isLoggedIn ? true : this._router.parseUrl("/login");
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.isLoggedIn ? true : this._router.parseUrl("/login");
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.isLoggedIn ? true : this._router.parseUrl("/login");
  }
}
