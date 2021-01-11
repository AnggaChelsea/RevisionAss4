import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Assign } from 'src/app/shared/models/Admin';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService,public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  asignForm:any = new FormGroup({
    _id: new FormControl(''),
    subDistrict: new FormControl('')
  })
  Assign():void {
    const assign: Assign ={
      _id : this.asignForm.get('_id').value,
      subDistrict: this.asignForm.get('subDistrict').value
    }
    this.adminService.assign(assign).subscribe(response => {
        Swal.fire({
          icon: 'success',
          title: 'Profile Created',
          text: `you can update ur fullname and picture`,
        })
    })
  }

}
