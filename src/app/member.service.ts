import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.list('/members/', {
      query: {
        orderByKey: true,
        equalTo: memberId
      }
    });
  }

  getMemberObjById(key: string) {
    return this.angularFire.database.object('/members/' + key);
  }

  saveMember(newMember) {
    this.members.push(newMember);
  }

  updateMember(member) {
    var memberInFirebase = this.getMemberObjById(member.$key);
    memberInFirebase.update({
      name: member.name,
      role: member.role,
      email: member.email,
      phone: member.phone,
      memberSince: member.memberSince,
      details: member.details,
      picture: member.picture});
  }

  deleteMember(member) {
    var memberInFirebase = this.getMemberObjById(member.$key);
    memberInFirebase.remove();
  }
}
