import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @ViewChildren(MatMenuTrigger, {read: ElementRef}) triggers!: QueryList<ElementRef>;

  private readonly _dropMenuData = {} as any;

  constructor() {}

  ngAfterViewInit() {
    this._populateDropMenuData();
  }

  private _populateDropMenuData() {
    this.triggers.forEach(trigger => {
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
