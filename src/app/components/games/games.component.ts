import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TournamentService } from '../../shared/services/tournament/tournament.service';
import { Tournament } from '../../shared/models/tournament';

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

 tournaments: any;
 currentTournament = null;
 currentIndex = -1;
 name = '';

  constructor(private tournamentService:TournamentService) {
  }

  ngOnInit() {
    $(function() {
      $(document).ready(function() {
        $('#example').DataTable();
      });
    });

     this.readTournament();
  }
  readTournament(): void {
    this.tournamentService.readAll()
      .subscribe(
        data => {
          this.tournaments = data;
          console.log(this.tournaments);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readTournament();
    this.currentTournament = null;
    this.currentIndex = -1;
  }

  setCurrentProduct(tournament:any, index:any): void {
   this.currentTournament = tournament;
   this.currentIndex = index;
 }

 searchByName(): void {
    this.tournamentService.searchByName(this.name)
      .subscribe(
        data => {
          this.tournaments = data;
          console.log(this.tournaments);
        },
        error => {
          console.log(error);
        });
  }




}
