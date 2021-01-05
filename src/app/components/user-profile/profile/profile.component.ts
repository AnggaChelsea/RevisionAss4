import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/models/Profile';
import { ProfileService } from 'src/app/shared/services/profile/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  subDistrict:any|string 
  birthDate:Date | undefined
  phoneNumber:number | undefined;
  fullname:string | undefined
  _groupId:string | undefined
  _tournamentId:string | undefined
  picture:string | undefined
  path:any
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((res) => {
      this.path = "http://localhost:5000/"
      this.picture = res.picture
      this.subDistrict = res.subDistrict
      this.birthDate = res.birthDate
      this.phoneNumber = res.phoneNumber
      this.fullname = res.fullname
      this._groupId = res._groupId
      this._tournamentId = res._tournamentId
    })
  }
}
