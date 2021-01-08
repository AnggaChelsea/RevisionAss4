import { TournamentService } from './../../shared/services/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.css'],
})
export class HallOfFameComponent implements OnInit {
  // First: any[] = [];
  Winner: any[] = [];
  TournamentName: any;
  TournamentType: any;
  TournamentFinished: any;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    // console.log('hof nyala');
    // this.showHoF();

    // console.log(this.Winner);
  }

  // showHoF() {
  //   return this.tournamentService.hallOfFame().subscribe(
  //     (data:any) => {
  //       this.TournamentName = data.FFA[0].tournamentName;
  //       this.TournamentType = data.FFA[0].tournamentType;
  //       this.TournamentFinished = data.FFA[0].tournamentClose;

  //       for (let i in data.sliced) {
  //         this.Winner.push(data.sliced[i]);
  //       }
  //     },
  //     (err:any) => {
  //       console.log(err);
  //     }
  //   );
  // }

  showGame() {}
}
