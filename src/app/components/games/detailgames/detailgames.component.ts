import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentService } from '../../../shared/services/tournament/tournament.service';
import { Games } from '../../../shared/models/games';

@Component({
  selector: 'app-detailgames',
  templateUrl: './detailgames.component.html',
  styleUrls: ['./detailgames.component.css']
})
export class DetailgamesComponent implements OnInit {
  dataId:any;
  currentTournament=null;
  message = '';

  constructor(private tournamentService:TournamentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.dataId = this.route.snapshot.paramMap.get('_id');
    this.route.queryParams.subscribe(params=>{
      this.tournamentService.read(this.dataId)
      .subscribe(data=>{
        console.log(data)
      })
    })
  }

  // getTournament(id:any):void {
  //   this.tournamentService.read(id).subscribe(
  //     data=>{
  //       this.dataId = data,
  //       console.log(data)
  //     }
  //     )
  // }

}
