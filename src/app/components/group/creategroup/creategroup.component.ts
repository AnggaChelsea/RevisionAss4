import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/shared/services/group/group.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {
  form:any=FormGroup;

  groupName:any|string
  groupPict:any|string
  path: any;

  constructor(private groupService:GroupService,public fb: FormBuilder, private router:Router) {   
    this.form = this.fb.group({
    groupName: [null],
    groupPict:[null]
  })}
  ngOnInit(): void {
  }
  uploadFile(event:any) {
    const file = <File>event.target.files[0]
    this.form.patchValue({
      groupPict: file
    });
    this.form.get('groupPict').updateValueAndValidity()
  }
  submitForm() {
    this.groupService.Creategroup(
      this.form.value.groupPict,
      this.form.value.groupName
    ).subscribe((event: HttpEvent<any>,) => {
      console.log(event)
      console.log(this.form.value.groupPict)
        Swal.fire({
          icon: 'success',
          title: 'Group Created',
        })
    })
  }

}
