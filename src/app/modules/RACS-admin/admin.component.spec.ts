import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {RacsAdminModule} from "./racs-admin.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BreakpointObserver} from "@angular/cdk/layout";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

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
    let tabGroup: DebugElement = fixture.debugElement.query(By.css('mat-tab-group'));
    let tabs: DebugElement[] = fixture.debugElement.queryAll(By.css('[role="tab"]'));
    expect(component).toBeTruthy();
    expect(tabGroup).toBeTruthy();
    expect(tabs.length).toBe(Object.keys(tabLabelIconPairs).length);

    // Check labels and icons for each tab
    tabs.forEach((tab: DebugElement) => {
      const label: string = tab.query(By.css('mat-label')).nativeElement.innerText;
      const icon: string = tab.query(By.css('mat-icon')).nativeElement.innerText;

      expect(label in tabLabelIconPairs).toBeTruthy();
      expect(tabLabelIconPairs[label]).toBe(icon)
    });
  });
});
