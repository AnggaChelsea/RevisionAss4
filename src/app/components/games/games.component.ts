import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TournamentService } from '../../shared/services/tournament/tournament.service';

import 'jquery';
declare var $: JQuery;

declare global {
  interface JQuery {
    (Jquery:any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

 tournaments:any;
 currentTutorial = null;
 currentIndex = -1;
 title = '';
 name = '';

 currenPage:number;
 pageSize:number;
 count:50;
 edited = "false";

  constructor(private tournamentService:TournamentService) {
  }

  ngOnInit() {
     this.readTournament();

  }


  readTournament(): void {
    this.tournamentService.readAll().subscribe(data => {
       this.tournaments = data;
       console.log(this.tournaments);
   });

  }

 // searchByName(): void {
 //    this.tournamentService.searchByName(this.name)
 //      .subscribe(
 //        data => {
 //          this.tournaments = data;
 //          console.log(this.tournaments);
 //        },
 //        error => {
 //          console.log(error);
 //        });
 //  }

  freeforall(){
    console.log('ini ffa')
  }
  individu(){
    console.log('ini individu');

  }




}
