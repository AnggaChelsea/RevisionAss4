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
  title = 'bracket';
  dataBracket: any;
  idName: any;
  dataId: null;
  dataDate: any;

  constructor(
    private bracketService: BracketService,
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    var minimalData = {
      teams: [
        ['beben', 'edo'],
        ['venny', 'tati'],
        ['rhajeng', 'stella'],
        ['agil', 'ratna'],
        ['rudi', 'empoi'],
        [null, null],
        [null, null],
        [null, null],
      ],
      results: [
        [
          [1, 2],
          [3, 5],
          [6, 2],
          [7, 4],
          [7, 4],
          [7, 4],
          [null, 5],
        ],
        [
          [4, 6],
          [2, 1],
          [2, 1],
        ],
        [
          [4, 6],
          [2, 1],
        ],
        [
          [4, 6],
          [2, 1],
        ],
      ],
    };

    $(() => {
      $('#minimal .demo').bracket({
        init: minimalData /* data to initialize the bracket with */,
      });
    });
    this.branches();
    this.dataBracket = this.route.snapshot.params['_id'];
    this.dataBracket = this.route.snapshot.paramMap.get('_id');
    this.route.queryParams.subscribe((params) => {
      this.tournamentService.read(this.dataBracket).subscribe((data) => {
        console.log(data);
      });
    });

    this.getDataId();
    this.dateTournament();
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
    this.tournamentService.getBranches().subscribe(
      (res) => {
        this.dataBracket = res;
        console.log(this.dataBracket);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
