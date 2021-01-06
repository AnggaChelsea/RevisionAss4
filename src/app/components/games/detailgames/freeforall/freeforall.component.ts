import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TournamentService } from './../../../../shared/services/tournament/tournament.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freeforall',
  templateUrl: './freeforall.component.html',
  styleUrls: ['./freeforall.component.css'],
})
export class FreeforallComponent implements OnInit {
  public id: any;
  Numbers: number = 0;
  Role: any;
  Stage: any;
  Participants: any[] = [];
  Pic: any[] = [];
  Name: any[] = [];
  Score: any[] = [];

  constructor(
    private tournamentService: TournamentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('_id');

    // this.route.queryParams.subscribe((params) => {
    //   this.tournamentService.getFFA(this.id).subscribe((data) => {
    //     console.log(data);
    //   });
    // });
    this.auth();
    this.readTournament();
    this.FFA();
    console.log(this.Pic);
  }

  auth() {
    return this.authService.getUser().subscribe((data) => {
      this.Role = data.role;
      console.log(this.Role)
    });
  }

  readTournament() {
    return this.tournamentService.read(this.id).subscribe((data) => {
      this.Stage = data.tournament.stageName;
    });
  }

  FFA() {
    return this.tournamentService.getFFA(this.id).subscribe((data: any) => {
      // this.id = data;
      console.log(this.Stage);

      if (this.Stage == 1) {
        const Arr = data.reportADV.participant;
        for (let i = 0; i < Arr.length; i++) {
          let url: any = `${environment.urlAddress}`;
          this.Participants.push(data.reportADV.participant[i]);
          this.Pic.push(url + data.reportADV.participant[i].picture);
          this.Name.push(data.reportADV.participant[i].fullname);
          this.Score.push(data.reportADV.participant[i].score);
          this.Numbers = this.Name.length;
        }
        console.log(this.Pic);
      } else {
        const Arr = data.report.participant;

        for (let i = 0; i < Arr.length; i++) {
          let url: any = `${environment.urlAddress}`;
          this.Participants.push(data.reportADV.participant[i]);
          this.Pic.push(url + data.report.participant[i].picture);
          this.Name.push(data.report.participant[i].fullname);
          this.Score.push(data.report.participant[i].score);
          this.Numbers = this.Name.length;
        }
      }
      // this.Pic = `${environment.urlAddress}+data.`
    });
  }
}
