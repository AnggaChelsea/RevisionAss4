import { TournamentService } from './../../../../shared/services/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';
import { BracketService } from 'src/app/shared/services/tournament/bracket.service';
import { ActivatedRoute, Router } from '@angular/router'

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
  dataBracket:any;
  idName:any;

  constructor(
    private bracketService: BracketService,
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    var minimalData = {
      teams: [
        ['grave robber', 'Puti'],
        ['kasep abis', 'Eja purnama'],
        ['mariana', 'Peroket'],
        ['juliana', 'Radja N'],
      ],
      result: [],
    };

    $(() => {
      $('#minimal .demo').bracket({
        init: minimalData /* data to initialize the bracket with */,
      });
    });
    this.branches();
    this.dataBracket = this.route.snapshot.params['_id'];
    this.dataBracket = this.route.snapshot.paramMap.get('_id')
    this.route.queryParams.subscribe(params=>{
      this.tournamentService.read(this.dataBracket)
      .subscribe(data=>{
        console.log(data)
      })
    })


  }


  branches(): void {
    this.tournamentService.read(this.dataBracket).subscribe(
      (res) => {
        this.dataBracket = res.tournament.participant
        console.log(this.dataBracket);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getName(){

  }



  // var acData:any[] = ["kr:MC", "ca:HuK", "se:Naniwa", "pe:Fenix",
  //             "us:IdrA", "tw:Sen", "fi:Naama"]

  // acEditFn(container: any, data: any, doneCb: any) {
  //   var input: any = $('<input type="text">');
  //   input.val(data);
  //   input.autocomplete({ source: acData })
  //   input.blur(function () {
  //     doneCb(input.val());
  //   });
  //   input.keyup(function (e: any) {
  //     if ((e.keyCode || e.which) === 13) input.blur();
  //   });
  //   container.html(input);
  //   input.focus();
  // }

  // acRenderFn(container: any, data: any, score: any, state: any) {
  //   switch (state) {
  //     case 'empty-bye':
  //       container.append('BYE');
  //       return;
  //     case 'empty-tbd':
  //       container.append('TBD');
  //       return;

  //     case 'entry-no-score':
  //     case 'entry-default-win':
  //     case 'entry-complete':
  //       var fields = data.split(':');
  //       if (fields.length != 2) container.append('<i>INVALID</i>');
  //       else
  //         container
  //           .append('<img src="site/png/' + fields[0] + '.png"> ')
  //           .append(fields[1]);
  //       return;
  //   }
  // }

  // saveFn(data: any, userData: any) {
  //   var json = jQuery.toJSON(data);
  //   // var json = jQuery.toJSON(data);
  //   $('#saveOutput').text('POST ' + userData + ' ' + json);
  //   /* You probably want to do something like this
  // jQuery.ajax("rest/"+userData, {contentType: 'application/json',
  //                               dataType: 'json',
  //                               type: 'post',
  //                               data: json})
  // */
  // }

  // edit_fn(container: any, data: any, doneCb: any) {
  //   var input = $('<input type="text">');
  //   input.val(data ? data.flag + ':' + data.name : '');
  //   container.html(input);
  //   input.focus();
  //   input.blur(function () {
  //     var inputValue = input.val();
  //     if (inputValue.length === 0) {
  //       doneCb(null); // Drop the team and replace with BYE
  //     } else {
  //       var flagAndName = inputValue.split(':'); // Expects correct input
  //       doneCb({ flag: flagAndName[0], name: flagAndName[1] });
  //     }
  //   });
  // }

  // render_fn(container: any, data: any, score: any, state: any) {
  //   switch (state) {
  //     case 'empty-bye':
  //       container.append('No team');
  //       return;
  //     case 'empty-tbd':
  //       container.append('Upcoming');
  //       return;

  //     case 'entry-no-score':
  //     case 'entry-default-win':
  //     case 'entry-complete':
  //       // container
  //       // .append('<img src="site/png/' + data.flag + '.png" /> ')
  //       // .append(data.name);
  //       return;
  //   }
  // }
}
