import { environment } from '../../../../../environments/environment';
import { error } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../../../shared/services/tournament/tournament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registertournament',
  templateUrl: './registertournament.component.html',
  styleUrls: ['./registertournament.component.css'],
})
export class RegistertournamentComponent implements OnInit {
  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  profileExist: boolean = false;
  groupRegister: any;
  groupReq: boolean = false;
  dataId: any = {};
  tournamentDatas: any;
  tournamentDate: any;
  alert: boolean = false;
  getData: any;
  profiles: any;
  groups: any[] = [];

  memberPic: any = [];
  groupInfo: any;
  groupPic: any;
  profilesPic: any;
  tournament = {
    name: '',
    gambar: '',
    deskripsi: '',
    price: null,
    jumlah: null,
    deskripsisingkat: '',
  };
  submmited = false;
  curPage!: number;
  pageSize!: number;

  ngOnInit() {
    this.dataId = this.route.snapshot.params['_id'];
    this.getDataParticipant();
    this.profile();
    this.tournamentData();
    this.getGroup();
  }

  getDataParticipant() {
    this.tournamentService.readAll().subscribe((data) => {
      this.getData = data;
    });
  }
  closeAlert() {
    this.alert = false;

    this.curPage = 1;
    this.pageSize = 5;
  }
  numberOfPages() {
    return Math.ceil(this.getData.length / this.pageSize);
  }

  createtournament(): void {
    const data = {
      name: this.tournament.name,
      gambar: this.tournament.gambar,
      deskripsi: this.tournament.deskripsi,
      price: this.tournament.price,
      jumlah: this.tournament.jumlah,
      deskripsisingkat: this.tournament.deskripsisingkat,
    };
    this.tournamentService.create(data).subscribe((response) => {
      console.log(response);
      this.submmited = true;
    });
    this.alert = true;
  }

  profile() {
    this.tournamentService.getProfile().subscribe(
      (success: any) => {
        const image: any = success.picture;

        // const groupImage: any = success.group.groupPict;

        const pic: any = `${environment.urlAddress}` + image;
        // console.log(`${environment.urlAddress}` + image);
        this.profiles = success;
        this.profilesPic = `${environment.urlAddress}` + image;

        // this.groupPic = `${environment.urlAddress}` + groupImage;
        // this.groupInfo = success.group;
        this.profileExist = true;

        // console.log(this.profilesPic);
        // console.log(this.groupInfo);
        // console.log(this.groups.members);
      },
      (error) => {
        console.log(error);
        this.profileExist = false;
      }
    );
  }

  getGroup() {
    this.tournamentService.getGroup().subscribe(
      (success: any) => {
        console.log(success);
        const groupImage: any = success.group.groupPict;
        this.groupPic = `${environment.urlAddress}` + groupImage;
        this.groupInfo = success.group;
        // for (let i = 0; i < success.members.length; i++) {
        // console.log(success.members[i]);
        //   Groups.push(success.members[i]);
        // }
        // this.groups.push()
        this.groups = success.members;
        // console.log(this.groups);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  tournamentData() {
    const _id: any = this.route.snapshot.params._id;
    this.tournamentService.read(_id).subscribe(
      (success) => {
        const start = success.tournament.tournamentStart;
        const startParse = new Date(start).toDateString();
        const open = success.tournament.tournamentOpen;
        const openParse = new Date(open).toDateString();
        const close = success.tournament.tournamentClose;
        const closeParse = new Date(close).toDateString();
        this.tournamentDatas = success;
        this.tournamentDate = [closeParse, openParse, startParse];
        console.log(this.tournamentDatas);
        if (success.tournament.groupEntry === true) {
          this.groupReq = true;
        } else {
          this.groupReq;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  participantSubmit() {
    this.tournamentService
      .registerTournamentPerson({
        tournamentName: this.tournamentDatas.tournament.tournamentName,
      })
      .subscribe(
        (success) => {
          console.log(success);
          Swal.fire({
            icon: 'success',
            title: 'Log in success',
            text: `${success.message}`,
          });
          // this.router.navigate(['']);
        },
        (err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.error.message}`,
          });
        }
      );
  }

  groupSubmit() {
    this.groupRegister = {
      tournamentName: this.tournamentDatas.tournament.tournamentName,
      groupName: this.profiles.group.groupName,
    };
    this.tournamentService
      .registerTournamentGroup(this.groupRegister)
      .subscribe(
        (success) => {
          console.log(success);
          Swal.fire({
            icon: 'success',
            title: 'Log in success',
            text: `${success.message}`,
          });
        },
        (err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.error.message}`,
          });
        }
      );
  }
}
