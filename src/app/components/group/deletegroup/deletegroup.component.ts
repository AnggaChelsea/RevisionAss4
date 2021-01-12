import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/shared/services/group/group.service';
import {delgroup} from "src/app/shared/models/group"

@Component({
  selector: 'app-deletegroup',
  templateUrl: './deletegroup.component.html',
  styleUrls: ['./deletegroup.component.css']
})
export class DeletegroupComponent implements OnInit {
  form:any
  constructor(private groupService:GroupService,public fb: FormBuilder, private router:Router) {   
    this.form = this.fb.group({
    groupName: ['']
  }) }
  ngOnInit(): void {
  }
delete(){
  this.groupService.DeleteGroup(this.form.groupName).subscribe(result =>{
    console.log(result)
  }
  )
}
}
