import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavConfig} from "../interfaces";
import {mainNavItems} from "./mainNav.struct";

@Component({
  selector: 'app-racs',
  templateUrl: './racs.component.html',
  styleUrls: ['./racs.component.scss']
})
export class RacsComponent {
  title = 'RACS';

  @ViewChild('drawerToggleBtn', {read: ElementRef})
  private readonly _drawerToggleBtn!: ElementRef;

  private readonly _navConfig: NavConfig = {
    linkClickFn: () => {
      this._drawerToggleBtn.nativeElement.click();
      this._drawerToggleBtn.nativeElement.blur();
    },
    navItems: mainNavItems,
  }

  constructor() {
  }


  get navConfig(): NavConfig {
    return this._navConfig;
  }
}
