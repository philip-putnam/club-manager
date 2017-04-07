import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  sendEditForm(member) {
    this.memberService.updateMember(member);
  }

}
