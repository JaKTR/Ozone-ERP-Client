import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NavConfig, NavItem} from "./interfaces";
import {mainNavItems} from "./mainNav.struct";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
