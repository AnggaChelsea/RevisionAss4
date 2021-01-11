import { Component, OnInit } from '@angular/core';
import 'jquery';
declare var $: JQuery;

declare global {
  interface JQuery {
    (arg0: any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-allbracket',
  templateUrl: './allbracket.component.html',
  styleUrls: ['./allbracket.component.css']
})
export class AllbracketComponent implements OnInit {
  minimalData = {
    teams: [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"]  /* second matchup */
    ],
    results: [
      [[1, 2], [3, 4]],       /* first round */
      [[4, 6], [2, 1]]        /* second round */
    ]
  };


  constructor() { }

  public ngOnInit(){
    // $('#minimal').bracket({
    //   init: this.minimalData /* data to initialize the bracket with */
    // })
  }

  

}
