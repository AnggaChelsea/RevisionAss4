import { Component, OnInit } from '@angular/core';
// import { Profile } from 'src/app/shared/model/Profile';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  subDistrict: string | undefined;
  birthDate: Date | undefined;
  phoneNumber: number | undefined;
  fullname: string | undefined;
  _groupId: string | undefined;
  _tournamentId: string | undefined;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.getProfile().subscribe((res) => {
    //   this.subDistrict = res.data.subDistrict
    //   this.birthDate = res.data.birthDate
    //   this.phoneNumber = res.data.phoneNumber
    //   this.fullname = res.data.fullname
    //   this._groupId = res.data._groupId
    //   this._tournamentId = res.data._tournamentId
    // })
  }
}
