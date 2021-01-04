import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Profile, update } from 'src/app/shared/models/Profile';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { ProfileService } from 'src/app/shared/services/profile/profile.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile:any
  form:any=FormGroup;
  percentDone: any = 0;
  users = [];

  constructor(private profileService:ProfileService,public fb: FormBuilder) {
    this.form = this.fb.group({
      fullname: [''],
      subDistrict: [''],
      phoneNumber: [''],
      birthDate: [''],
      picture:[null]
    })
   }
  ngOnInit(): void {}
  // profileForm:any = new FormGroup({
  //   fullname: new FormControl(''),
  //   subDistrict: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   birthDate : new FormControl(''),
  // })
  // updateForm:any = new FormGroup({
  //   fullname: new FormControl('')
  // })
  uploadFile(event:any) {
    const file = <File>event.target.files[0]
    this.form.patchValue({
      picture: file
    });
    this.form.get('picture').updateValueAndValidity()
  }
  submitForm() {
    this.profileService.Createprofile(
      this.form.value.birthDate,
      this.form.value.subDistrict,
      this.form.value.phoneNumber,
      this.form.value.fullname,
      this.form.value.picture
    ).subscribe((event: HttpEvent<any>) => {
        Swal.fire({
          icon: 'success',
          title: 'Profile Created',
          text: `you can update ur fullname and picture`,
        })
    })
  }

  updateProfile() {
    this.profileService.putProfile(this.form.value.fullname,this.form.value.picture).subscribe((res) => {
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: `ur profile sucsessfuly updated`,
      })
  })
  }
}
