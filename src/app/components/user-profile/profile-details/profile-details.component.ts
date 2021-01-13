import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Profile, update } from 'src/app/shared/models/Profile';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import {  ProfileService } from 'src/app/shared/services/profile/profile.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile:any
  form:any=FormGroup;

  subDistrict: any | string;
  birthDate: Date | undefined;
  phoneNumber: number | undefined;
  fullname: string | undefined;
  _groupId: string | undefined;
  _tournamentId: string | undefined;
  picture: string | undefined;
  path: any;

  constructor(private profileService:ProfileService,public fb: FormBuilder, private router:Router) {
    this.form = this.fb.group({
      fullname: [''],
      subDistrict: [''],
      phoneNumber: [''],
      birthDate: [''],
      picture:[null]
    })
   }
   
  ngOnInit(): void {
    this.profileService.getProfile().subscribe((res) => {
      // this.path = "http://localhost:5000/"
      this.path = 'https://git.heroku.com/radiant-reef-49263.git/';
      this.picture = res.picture;
      this.subDistrict = res.subDistrict;
      this.birthDate = res.birthDate;
      this.phoneNumber = res.phoneNumber;
      this.fullname = res.fullname;
      this._groupId = res._groupId;
      this._tournamentId = res._tournamentId;
    });
  }
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

  updteProfile() {
    this.profileService.putProfile(this.form.value.fullname,this.form.value.picture).subscribe((res) => {
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: `ur profile sucsessfuly updated`,
      })
      this.router.navigate(['profiles/profile']);
  })
  }
}
