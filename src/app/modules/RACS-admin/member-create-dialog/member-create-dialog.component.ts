import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ResponsiveService} from "../../../services/responsive-service/responsive.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MembershipServiceService} from "../../../services/membership-service/membership-service.service";
import {Observable, tap} from "rxjs";
import {User} from "../../../interfaces";

@Component({
  selector: 'app-member-create-dialog',
  templateUrl: './member-create-dialog.component.html',
  styleUrls: ['./member-create-dialog.component.scss']
})
export class MemberCreateDialogComponent {

  private readonly _newMemberForm: FormGroup = this._fb.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    mobile: [null, Validators.required],
    brigadeNo: ['', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]{6}$'),
    ])],
    role: ['', Validators.required],
  });

  private createUserResponse$: Observable<any> | undefined;
  private _createdUser: User | undefined;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<MemberCreateDialogComponent>,
    private _membershipService: MembershipServiceService,
    public readonly responsiveService: ResponsiveService) {
  }

  public get newMemberForm(): FormGroup {
    return this._newMemberForm;
  }

  public get createUserResponse(): Observable<any> | undefined {
    return this.createUserResponse$;
  }

  public hasError(controlName: string): boolean | undefined {
    return this._newMemberForm.get(controlName)?.invalid;
  }

  public getErrorMessage(controlName: string): string {
    const control: FormControl = this._newMemberForm.get(controlName) as FormControl;
    if (control.hasError('required')) return "This field is required";
    if (control.hasError('pattern')) return "This field must be a valid 6 digit number";

    return 'Field does not meet all requirements';
  }

  /**
   * Creates a new user object and passes it to the membership service to make the request to the server.
   * The Observable returned from the request gets set to the createUserResponse$ property.
   * Which allows for errors to be displayed to the user in the dialog.
   * If no errors are returned, the returned user object is set to the _createdUser property.
   * This gets passed to the closeDialog() method to close the dialog, after which the dialog is closed.
   */
  public submitMember(): void {
    if (this._newMemberForm.valid) {
      this.createUserResponse$ = this._membershipService.createUser(
        {
          username: this._newMemberForm.get('username')?.value,
          first_name: this._newMemberForm.get('firstName')?.value,
          last_name: this._newMemberForm.get('lastName')?.value,
          email: this._newMemberForm.get('email')?.value,
          organization_id: this._newMemberForm.get('brigadeNo')?.value,
          mobile: this._newMemberForm.get('mobile')?.value,
          role: this._newMemberForm.get('role')?.value
        }
      ).pipe(
        tap((response: User) => {
          this._createdUser = response;
          this.closeDialog();
        })
      );
    }
  }

  public closeDialog(): void {
    this._dialogRef.close(this._createdUser);
  }

}
