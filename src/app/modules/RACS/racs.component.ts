import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavConfig} from "../../interfaces";
import {mainNavItems} from "./models/mainNav.struct";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-racs',
  templateUrl: './racs.component.html',
  styleUrls: ['./racs.component.scss']
})
export class RacsComponent {

  @ViewChild('drawerToggleBtn', {read: ElementRef})
  private readonly _drawerToggleBtn!: ElementRef;

  private readonly _navConfig: NavConfig = {
    linkClickFn: () => {
      this._drawerToggleBtn.nativeElement.click();
      this._drawerToggleBtn.nativeElement.blur();
    },
    navItems: mainNavItems,
  }

  constructor(private _title: Title) {
    this._title.setTitle('RACS');
  }


  get navConfig(): NavConfig {
    return this._navConfig;
  }
}
