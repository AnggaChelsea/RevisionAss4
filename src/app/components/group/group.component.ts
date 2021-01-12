import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/shared/services/group/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groupName: any | string;
  subDistrict: any | string;
  phoneNumber: number | undefined;
  fullname: string | undefined;
  username: string | undefined;
  groupPict: string | undefined;
  picture: string | undefined;
  constructor(private groupService:GroupService) {
   }

  ngOnInit(): void {
    this.groupService.getGroup().subscribe(result => {
      this.groupName = result.group.groupName;
      this.groupPict = result.group.groupPict;
      this.subDistrict = result.subDistrict;

      for(let i = 0; i <result.members; i++) {
        console.log(i)
      }

      console.log(result)
    })
  }

}
