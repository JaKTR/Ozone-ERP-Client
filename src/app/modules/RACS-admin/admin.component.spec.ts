import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {RacsAdminModule} from "./racs-admin.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {of} from "rxjs";

export class BreakpointObserverStub {
  observe(): BreakpointState {
    return {
      matches: true,
      breakpoints: {
        "web": true
      }
    } as BreakpointState
  }
}

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let observer: BreakpointObserver;
  let compiled: any;
  const tabLabelIconPairs: { [key: string]: string; } = {
    Membership: 'groups',
    Rosters: 'calendar_month',
    Notifications: 'edit_notifications',
    Security: 'shields',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [RacsAdminModule, BrowserAnimationsModule],
      providers: [{BreakpointObserver, useClass: BreakpointObserverStub}]
    }).compileComponents();

    fixture = await TestBed.createComponent(AdminComponent);
    observer = await TestBed.inject(BreakpointObserver);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and show tabs with labels in Web View', () => {
    expect(component).toBeTruthy();
  });

  it('should show tabs with icons in Web View', waitForAsync(() => {
      let tabGroup = compiled.querySelector('mat-tab-group');
      let tabs: any[] = compiled.querySelectorAll('[role="tab"]');
      expect(component).toBeTruthy();
      expect(tabGroup).toBeTruthy();
      expect(tabs.length).toBe(Object.keys(tabLabelIconPairs).length);

      fixture.whenStable().then(() => {
        // const spy = spyOn(fixture, 'observe').and.returnValue(of({matches: true} as BreakpointState));
        tabs.forEach((tab: any) => {
          const label: string = tab.querySelector('mat-label').innerText;
          const icon: string = tab.querySelector('mat-icon').innerText;

          // Check labels and icons for each tab
          fixture.detectChanges();
          expect(label in tabLabelIconPairs).toBeTruthy();
          expect(tabLabelIconPairs[label]).toBe(icon)
        });
      });
    })
  );
});
