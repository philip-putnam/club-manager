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

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToProfilePage(member) {
    this.router.navigate(['member-profile', member.$key])
  }

}
