import { Component, OnInit } from '@angular/core';

import 'jquery';
declare var $: JQuery;

declare global {
  interface JQuery {
    (Jquery:any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-createtournament',
  templateUrl: './createtournament.component.html',
  styleUrls: ['./createtournament.component.css']
})
export class CreatetournamentComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $(document).ready(function(){
//Menu Toggle Script
$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
});

// For highlighting activated tabs
$("#tab1").click(function () {
$(".tabs").removeClass("active1");
$(".tabs").addClass("bg-light");
$("#tab1").addClass("active1");
$("#tab1").removeClass("bg-light");
});
$("#tab2").click(function () {
$(".tabs").removeClass("active1");
$(".tabs").addClass("bg-light");
$("#tab2").addClass("active1");
$("#tab2").removeClass("bg-light");
});
$("#tab3").click(function () {
$(".tabs").removeClass("active1");
$(".tabs").addClass("bg-light");
$("#tab3").addClass("active1");
$("#tab3").removeClass("bg-light");
});
})
  }

}
