import { TournamentService } from './../../../../shared/services/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';
import { BracketService } from 'src/app/shared/services/tournament/bracket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../../shared/services/auth/auth.service';
import { UserService } from './../../../../shared/services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import 'jquery';

declare var $: any;

declare global {
  interface JQuery {
    (toJSON: any): JQuery;
    (arg0: any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css'],
})
export class BracketComponent implements OnInit {
  submitForm: FormGroup;
  scoreList: any = {};
  winnerList: FormGroup;
  winners: any = {};
  TournamentID: any = {};
  id: any;
  title = 'bracket';
  dataBracket: any;
  list: any[] = [];
  teams: any;
  //
  idName: any;
  dataId: null;
  dataDate: any;
  dataDate2: any;
  length: any;
  isAdmin: boolean = false;
  isHeadChief: boolean = false;
  isPanitia: boolean = false;
  isParticipant: boolean = false;
  isUser: boolean = false;
  stage: number = 0;

  //

  minimalData: any = {};

  constructor(
    public fb: FormBuilder,
    private bracketService: BracketService,
    private tournamentService: TournamentService,
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.submitForm = this.fb.group({
      score1: [''],
      score2: [''],
    });

    this.winnerList = this.fb.group({
      first: [''],
      second: [''],
      third: [''],
      fourth: [''],
    });
  }

  ngOnInit() {
    this.auth();
    this.id = this.route.snapshot.paramMap.get('_id');

    this.branches();
    // this.auth();

    this.getDataId();
    this.dateTournament();
    this.dataTournament();
  }

  getDataId(): void {
    this.tournamentService.read(this.dataBracket).subscribe((data: any) => {
      this.dataId = data.participant.length;
    });
  }

  dateTournament(): void {
    this.tournamentService.read(this.dataBracket).subscribe((data: any) => {
      this.dataDate = data.tournament;
    });
  }

  dataTournament() {
    this.tournamentService.read(this.id).subscribe((data: any) => {
      this.stage = data.tournament.stageName;
      var date = new Date(data.tournament.tournamentStart);
      var date2 = new Date(data.tournament.tournamentClose);
      this.idName = data.tournament.tournamentName;
      this.dataDate = date.toUTCString();
      this.dataDate2 = date2.toUTCString();
    });
  }

  branches(): void {
    this.tournamentService.getBranches(this.id).subscribe(
      (res) => {
        console.log(res);

        this.minimalData = res;
        this.length = res.teams.length;

        var resizeParameters = {
          teamWidth: 120,
          scoreWidth: 20,
          matchMargin: 40,
          roundMargin: 80,
          // init: minimalData,
          init: this.minimalData,
        };

        function updateResizeDemo() {
          $('#resize .demo').bracket(resizeParameters);
        }

        $(updateResizeDemo);

        $(() => {
          $('#minimal .demo').bracket({
            // init: minimalData,
            init: this.minimalData,
          });
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  auth() {
    this.authService.getUser().subscribe((data) => {
      if (data.role === 'admin') {
        this.isAdmin = true;
      } else if (data.role === 'headchief') {
        this.isHeadChief = true;
      } else if (data.role === 'comittee') {
        this.isPanitia = true;
      } else if (data.role === 'participant') {
        this.isParticipant = true;
      } else if (data.role === 'user') {
        this.isUser = true;
      }
    });
  }

  branchSubmit() {
    var value = this.submitForm.value;

    this.scoreList = {
      score1: value.score1,
      score2: value.score2,
      _id: this.id,
    };

    this.tournamentService.putBranchScore(this.scoreList).subscribe(
      (success) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          html: `Put Score successfully`,
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

  proceedBranch() {
    this.TournamentID = { _id: this.id };
    this.tournamentService.startBranch(this.TournamentID).subscribe(
      (success) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          html: `Tournament begin`,
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

  winnerBranch() {
    console.log('winner branch');
    var value = this.winnerList.value;
    this.winners = {
      first: value.first,
      second: value.second,
      third: value.third,
      fourth: value.fourth,
      _id: this.id,
    };

    this.tournamentService.finishBranch(this.winners).subscribe(
      (success) => {
        Swal.fire({
          icon: 'success',
          title: 'Tournament Ended',
          html: `Winner has been submitted and tournament is finished`,
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
}
