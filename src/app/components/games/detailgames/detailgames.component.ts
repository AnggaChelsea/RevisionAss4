import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentService } from '../../../shared/services/tournament/tournament.service';

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
    this.getTournament(this.route.snapshot.paramMap.get('id'));
  }

  getTournament(id:any):void {
    this.tournamentService.read(id).subscribe(
      data=>{
        this.dataId = data,
        console.log(data)
      }
      )
  }

}
