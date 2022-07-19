import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {RacsAdminModule} from "./racs-admin.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {of} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

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
  let tabGroup: any;
  let tabs: any[];
  let compiled: any;
  const tabLabelIconPairs: { [key: string]: string; } = {
    Membership: 'groups',
    Rosters: 'calendar_month',
    Notifications: 'edit_notifications',
    Configuration: 'tune',
    Security: 'shields',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [RacsAdminModule, BrowserAnimationsModule, HttpClientModule],
      providers: [
        {BreakpointObserver, useClass: BreakpointObserverStub},
        HttpClient
      ]
    }).compileComponents();

    fixture = await TestBed.createComponent(AdminComponent);
    observer = await TestBed.inject(BreakpointObserver);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Set up elements that will be used for multiple individual tests
    tabGroup = compiled.querySelector('mat-tab-group');
    tabs = compiled.querySelectorAll('[role="tab"]');
  });

  /**
   * Test that the component is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * MUST RUN BEFORE INDIVIDUAL TAB TESTS
   * Tests that the main tabs for the admin component are rendered,
   */
  it('should show tabs with icons in Web View', waitForAsync(() => {
      // Check correct number of tabs
      expect(component).toBeTruthy();
      expect(tabGroup).toBeTruthy();
      expect(tabs.length).toBe(Object.keys(tabLabelIconPairs).length);
    })
  );

  /**
   * Tests that each of the main tabs for the admin component have the correct icon and label.
   */
  it('Should show the correct tab labels and icons in Web View', waitForAsync(() => {
    fixture.whenStable().then(() => {
      spyOn(observer, 'observe').and.returnValue(of({
        matches: true,
        breakpoints: {
          "web": true
        }
      } as BreakpointState));

      // Wait for changes and confirm observe was called
      fixture.detectChanges();
      expect(observer.observe).toHaveBeenCalled();

      // Check correct labels and icons
      tabs.forEach((tab: any) => {
        const label: string = tab.querySelector('mat-label').innerText;
        const icon: string = tab.querySelector('mat-icon').innerText;

        // Check labels and icons for each tab
        expect(label in tabLabelIconPairs).toBeTruthy();
        expect(tabLabelIconPairs[label]).toBe(icon)
      });
    });
  }));
});
