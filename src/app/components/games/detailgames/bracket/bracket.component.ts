import { Component, OnInit } from '@angular/core';
import { BracketService } from 'src/app/shared/services/tournament/bracket.service';

import 'jquery';
declare var $: JQuery;

declare global {
  interface JQuery {
    (arg0: any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {

  minimalData = {
    teams: [
      ["Angga0", "Badru0"],/* first matchup */
      ["Angga1", "Badru1"],
      ["Angga2", "Badru2"],
      ["Angga3", "Badru3"],
      ["Angga4", "Badru4"],
      ["Angga5", "Badru5"],
      ["Angga6", "Badru6"],
      ["Irfan9", "Anju9"]  
    ],
  results: [
    [[4, 2], [3, 4],[3, 4]], /* first round */
    [[4, 6], [2, 1]]        /* second round */
    ]
  };


  constructor(private bracketService:BracketService) { }

  public ngOnInit(){
    $('#minimal').bracket({
      init: this.minimalData /* data to initialize the bracket with */
    })
  }

  
  


}
