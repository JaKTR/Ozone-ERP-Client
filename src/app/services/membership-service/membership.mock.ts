import {Observable, of} from "rxjs";
import {User} from "../../interfaces";

export class MockMembershipService {
  getAllMembers(): Observable<User[]> {
    return of([]);
  }
}
