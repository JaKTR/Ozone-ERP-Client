import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren} from '@angular/core';
import {NavConfig} from "../interfaces";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChildren('navLink', {read: ElementRef})
  private readonly _mainNavLinks!: QueryList<ElementRef>;
  @ViewChildren(MatMenuTrigger, {read: ElementRef})
  private readonly _triggers!: QueryList<ElementRef>;

  @Input() navConfig!: NavConfig;

  private readonly _dropMenuData = {} as any;

  constructor() { }

  ngAfterViewInit() {
    this._populateDropMenuData();
    this._attachNavLinksListeners();
  }

  private _attachNavLinksListeners() {
    if(this.navConfig.linkClickFn) {
      this._mainNavLinks.forEach(link => {
        link.nativeElement.addEventListener('click', this.navConfig.linkClickFn);
      });
    }
  }

  private _populateDropMenuData() {
    this._triggers.forEach(trigger => {
      this._dropMenuData[trigger.nativeElement.id] = {
        triggerWidth: trigger.nativeElement.clientWidth,
      };
    });
  }

  public menuData(triggerID: string) {
    let data = this._dropMenuData[triggerID];
    return data ? data : {triggerWidth: 0};
  }

}
