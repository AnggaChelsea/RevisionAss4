import { TournamentService } from './../../../../shared/services/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';
import { BracketService } from 'src/app/shared/services/tournament/bracket.service';
import { ActivatedRoute, Router } from '@angular/router';

import 'jquery';
// declare var $: JQuery;
declare var $: any;

declare global {
  interface JQuery {
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
  id: any;
  title = 'bracket';
  dataBracket: any;
  list: any[] = [];
  teams: any[] = [];
  // teams: any;
  idName: any;
  dataId: null;
  dataDate: any;
  //

  minimalData: any = {};

  constructor(
    private bracketService: BracketService,
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.minimal);
    this.id = this.route.snapshot.paramMap.get('_id');
    this.branches();
    this.getDataId();
    this.dateTournament();

    // this.minimalData.teams = this.teams;
    // console.log(this.minimalData.teams[0].length);
    // console.log(this.minimalData.teams[0]);
    // console.log(typeof this.minimalData);
    // console.log(this.minimalData.teams);
    // console.log(this.minimalData.teams[0]);
    // var minimal = this.minimalData;

    console.log(this.teams);
    console.log(this.teams.length);
    for (let i = 0; i < this.teams.length; i++) {
      console.log(this.teams[i]);
    }

    // console.log(this.teams[0]);
    // console.log(this.teams.length);
    // console.log(this.teams.length != 0);
    // console.log(this.teams == null);

    // var minimalData: any = this.minimalData;
    // minimalData.teams = this.minimal;

    // console.log(minimalData.teams);
    // console.log(this.minimal);
    // console.log(this.minimal.teams);

    // var minimalData = {
    // teams: [
    //   ['Bang jegot', 'indira'],
    //   ['kelantanman', null],
    //   ['notorious UK', null],
    //   ['Sofia', null],
    //   ['sir Bucks', null],
    //   ['idionsyncratic', null],
    //   ['si gemuk', null],
    //   ['tommy goblog', null],
    // ],
    //   result: [],
    // };

    $(() => {
      $('#minimal .demo').bracket({
        init: this.minimalData.teams /* data to initialize the bracket with */,
        // init: this.minimalData /* data to initialize the bracket with */,
      });
    });
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

  branches(): void {
    this.tournamentService.getBranches(this.id).subscribe(
      (res) => {
        // this.teams = res;
        // var minimalData = res;
        // var minimalData = res.teams;

        for (let i = 0; i < res.teams.length; i++) {
          this.teams.push(res.teams[i]);
        }
        console.log(this.teams);
        console.log(this.teams.length);
        for (let i = 0; i < this.teams.length; i++) {
          console.log(this.teams[i]);
        }

        // this.minimal.teams = this.teams;
        // console.log(this.minimal);
        // console.log(this.minimal.teams.length);

        // console.log(this.minimalData);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
