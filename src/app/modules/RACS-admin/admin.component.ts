import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'racs-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private _isWeb: boolean = this._breakpointObserver.isMatched(Breakpoints.Web);

  constructor(private _breakpointObserver: BreakpointObserver) { }

  public get isWeb(): boolean {
    return this._isWeb;
  }

  ngOnInit(): void {
  }

}
