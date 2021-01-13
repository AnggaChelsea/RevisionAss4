import { Component, OnInit } from '@angular/core';
import { delgroup, recruit } from 'src/app/shared/models/group';
import { GroupService } from 'src/app/shared/services/group/group.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

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
  id: string | undefined;
  path:any
  constructor(private groupService:GroupService) {
   }

  ngOnInit(): void {
    this.groupService.getGroup().subscribe(result => {
      this.path = 'http://localhost:5000/';
      this.groupName = result.group.groupName;
      this.groupPict = result.group.groupPict;
      this.subDistrict = result.group.subDistrict;
      const a = result.members
      for (const value of a ){
        console.log (value)
      this.fullname = value.fullname
      this.picture= value.picture
      this.username=value.username
      this.phoneNumber = value.phoneNumber
      this.id = value._id
      }
    })
  }
  recruitForm:any = new FormGroup({
    _userId: new FormControl(''),
  })
  recruit() {
    const recruit: recruit ={
      _userId : this.recruitForm.get('_userId').value,
    }
    this.groupService.Recruit(recruit).subscribe(response => {
      console.log(response)
        // Swal.fire({
        //   icon: 'success',
        //   title: 'recruit Headchief',
        //   text: `You are Headchief`,
        // })
    })
  }
  delete() {
    const recruit: recruit ={
      _userId : this.recruitForm.get('_userId').value,
    }
    this.groupService.delete(recruit).subscribe(response => {
      console.log(response)
        // Swal.fire({
        //   icon: 'success',
        //   title: 'recruit Headchief',
        //   text: `You are Headchief`,
        // })
    })
  }

}
