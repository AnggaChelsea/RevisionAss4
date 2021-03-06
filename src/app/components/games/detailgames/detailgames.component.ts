import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentService } from '../../../shared/services/tournament/tournament.service';

@Component({
  selector: 'app-detailgames',
  templateUrl: './detailgames.component.html',
  animations:[],
  styleUrls: ['./detailgames.component.css'],
})
export class DetailgamesComponent implements OnInit {
  dataId: any = {};
  currentTournament = null;
  message = '';
  type: any;

  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataId = this.route.snapshot.params['_id'];
    this.getTournament();
    this.message = '';
    this.dataId = this.route.snapshot.paramMap.get('_id');
    this.route.queryParams.subscribe((params) => {
      this.tournamentService.read(this.dataId).subscribe((data) => {
        // console.log(data)
      });
    });
  }

  getTournament(): void {
    this.tournamentService.read(this.dataId).subscribe((data) => {
      this.dataId = data.tournament;
    });
  }
}
