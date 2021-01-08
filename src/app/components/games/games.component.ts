import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TournamentService } from '../../shared/services/tournament/tournament.service';

import 'jquery';
declare var $: JQuery;

declare global {
  interface JQuery {
    (Jquery: any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  tournaments: any;
  participants:any;
  page = 0;
  count:any;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  filter!: string ;
  dataId: any;

  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.readTournament();
    this.getDataId()
    this.dataId = this.route.snapshot.params['_id'];
    this.dataId = this.route.snapshot.paramMap.get('_id');
    this.route.queryParams.subscribe(params=>{
      this.tournamentService.read(this.dataId)
      .subscribe(data=>{
        console.log(data)
      })
    })


  }
  getDataId():void{
    this.tournamentService.read(this.dataId).subscribe((data:any)=>{
      this.dataId = data.tournament.participant.length
      console.log(this.dataId)
    })
  }

  readTournament(): void {
    this.tournamentService.readAll().subscribe((data) => {
      this.tournaments = data.list
      console.log(this.participants)
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.readTournament();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readTournament();
  }

  // doSearch(value:string){
  //   console.log(`value=${value}`);
  //   this.router.navigateByUrl(`/search/${value}`);
  // }

  // searchByName(): void {
  //    this.tournamentService.searchByName(this.i)
  //      .subscribe(
  //        data => {
  //          this.tournaments = data;
  //          console.log(this.tournaments);
  //        },
  //        error => {
  //          console.log(error);
  //        });
  //  }
}
