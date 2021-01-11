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
  minimalData: any = {};
  idName: any;
  dataId: null;
  dataDate: any;
  // public minimalData: any[] = [];

  constructor(
    private bracketService: BracketService,
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    this.branches();
    this.getDataId();
    this.dateTournament();

    console.log(this.minimalData);
    // console.log(this.minimalData.teams[0]);
    // console.log(this.minimalData.length);
    // console.log(typeof this.minimalData);
    // console.log(minimalData);
    // console.log(this.id);
    // console.log(this.minimalData);g

    var minimalData = this.minimalData;

    $(() => {
      $('#minimal .demo').bracket({
        init: minimalData /* data to initialize the bracket with */,
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
    console.log('masuk branches');

    this.tournamentService.getBranches(this.id).subscribe(
      (res) => {
        this.minimalData.teams = res.teams;
        // console.log(this.minimalData.teams);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
