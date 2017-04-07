import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MemberService]
})
export class MemberProfileComponent implements OnInit {
  currentRoute: string = this.router.url;
  memberId: string;
  dynamicCurrent: string = '/member-profile/admin' + this.memberId;
  member;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
      this.dynamicCurrent = '/member-profile/admin/' + this.memberId;
    });
    this.member = this.memberService.getMemberById(this.memberId);
  }
}
