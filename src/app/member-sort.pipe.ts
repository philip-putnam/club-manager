import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'memberSort',
  pure: false
})
export class MemberSortPipe implements PipeTransform {

  transform(members: any, role) {
    if (role === undefined) return members;

    if (members) {
      return members.filter(function(member) {
        return member.role.toLowerCase().includes(role.toLowerCase());

      })
    }
  }
}
