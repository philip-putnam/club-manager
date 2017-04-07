import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  newMemberForm: boolean = false;

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToProfilePage(member) {
    if (this.currentRoute === '/members/admin') {
      this.router.navigate(['member-profile/admin/', member.$key]);
    } else {
      this.router.navigate(['member-profile', member.$key]);
    }
  }

  toggleNewMemberForm() {
    if (this.newMemberForm) {
      this.newMemberForm = false;
    } else {
      this.newMemberForm = true;
    }
  }

}
