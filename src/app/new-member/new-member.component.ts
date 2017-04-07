import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]
})
export class NewMemberComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  saveNewMember(name: string, role: string, email: string, phone: string, memberSince: string, details: string, picture: string) {
    if (name === '' || role === '') {
      alert("You must enter a name and a role!")
    } else {
      var newMember = {
        name: name,
        role: role,
        email: email,
        phone: phone,
        memberSince: memberSince,
        details: details,
        picture:picture
      };
      this.memberService.saveMember(newMember);
    }
  }

}
