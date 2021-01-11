import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TournamentService } from './../../../../shared/services/tournament/tournament.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
  //
  scoreForm: any = FormGroup;
  tournament: any;

  constructor(
    private tournamentService: TournamentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.scoreForm = this.fb.group({
      _id: [''],
      _userId: [''],
      Score: [''],
    });
  }

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
  }

  submitScore() {
    this.scoreForm = {
      _id: this.id,
      _userId: this.scoreForm.value._userId,
      Score: this.scoreForm.value.Score,
    };

    return this.tournamentService.putScore(this.scoreForm).subscribe(
      (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Submission success',
          text: `${data.message}`,
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error.message}`,
        });
      }
    );
  }

  auth() {
    return this.authService.getUser().subscribe((data) => {
      this.Role = data.role;
      console.log(this.Role);
    });
  }

  readTournament() {
    return this.tournamentService.read(this.id).subscribe((data) => {
      this.Stage = data.tournament.stageName;
    });
  }

  proceed() {
    this.scoreForm = {
      _id: this.id,
    };
    return this.tournamentService.startFFA(this.scoreForm).subscribe(
      (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Submission success',
          text: `${data.message}`,
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error.message}`,
        });
      }
    );
  }

  finish() {
    this.scoreForm = {
      _id: this.id,
    };
    return this.tournamentService.endFFA(this.scoreForm).subscribe(
      (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Submission success',
          text: `${data.message}`,
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error.message}`,
        });
      }
    );
  }

  FFA() {
    return this.tournamentService.getFFA(this.id).subscribe((data: any) => {
      this.tournament = data.table;

      if (this.Stage > 0) {
        const Arr = data.reportADV.participant;
        for (let i = 0; i < Arr.length; i++) {
          let url: any = `${environment.urlAddress}`;
          this.Participants.push(data.reportADV.participant[i]);
          this.Stage = data.reportADV.stageName;
        }
      } else {
        const Arr = data.report.participant;

        for (let i = 0; i < Arr.length; i++) {
          let url: any = `${environment.urlAddress}`;
          this.Participants.push(data.report.participant[i]);
          this.Stage = data.report.stageName;
        }
      }
    });
  }
}
