import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Profile } from 'src/app/shared/model/Profile';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile:any
  
  constructor(private authService: AuthService,public fb: FormBuilder) { }
  ngOnInit(): void {
  }
  profileForm:any = new FormGroup({
    fullname: new FormControl(''),
    subDistrict: new FormControl(''),
    phoneNumber: new FormControl(''),
    birthDate : new FormControl(''),
  })
  createProfile(): void{
    const profile: Profile ={
      fullname : this.profileForm.get('fullname').value,
      subDistrict : this.profileForm.get('subDistrict').value,
      phoneNumber : this.profileForm.get('phoneNumber').value,
      birthDate : this.profileForm.get('birthDate').value
    }
    this.authService.Createprofile(profile)
  }
}
