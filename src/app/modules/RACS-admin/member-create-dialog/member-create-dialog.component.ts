import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ResponsiveService} from "../../../services/responsive-service/responsive.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
    mobile: ['', Validators.required],
    brigadeNo: [null, Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]{9}$'),
    ])],
  });

  constructor(private _fb: FormBuilder, private _dialogRef: MatDialogRef<MemberCreateDialogComponent>, public readonly responsiveService: ResponsiveService) {
  }

  public get newMemberForm(): FormGroup {
    return this._newMemberForm;
  }

  public hasError(controlName: string): boolean | undefined {
    return this._newMemberForm.get(controlName)?.invalid;
  }

  public getErrorMessage(controlName: string): string {
    const control: FormControl = this._newMemberForm.get(controlName) as FormControl;
    if (control.hasError('required')) return "This field is required";
    if (control.hasError('pattern')) return "This field must be a valid 9 digit number";

    return 'Field does not meet all requirements';
  }


  public submitMember(): void {

  }

  public closeDialog(): void {
    this._dialogRef.close();
  }

}
