import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {RacsAdminModule} from "./racs-admin.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BreakpointObserver} from "@angular/cdk/layout";

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
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
      providers: [BreakpointObserver]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and show tabs with labels in Web View', () => {
    expect(component).toBeTruthy();
  });

  it('should show tab labels and icons', function () {
    let tabGroup = compiled.querySelector('mat-tab-group');
    let tabs: any[] = compiled.querySelectorAll('[role="tab"]');
    expect(component).toBeTruthy();
    expect(tabGroup).toBeTruthy();
    expect(tabs.length).toBe(Object.keys(tabLabelIconPairs).length);

    // Check labels and icons for each tab
    tabs.forEach((tab: any) => {
      const label: string = tab.querySelector('mat-label').textContent.trim();
      const icon: string = tab.querySelector('mat-icon').textContent.trim();

      expect(label in tabLabelIconPairs).toBeTruthy();
      expect(tabLabelIconPairs[label]).toBe(icon)
    });
  });
});
