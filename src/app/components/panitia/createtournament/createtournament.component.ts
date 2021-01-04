import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service'
import { CsvService } from '../../../shared/services/csv.service';
import { FileHolder } from 'angular2-image-upload';


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

  alert:boolean = false
  getData:any;
  images = []
  dataPage:any;
  
  

  tournament = {
    tournamentName:'',
    tournamentPict:'',
    groupEntry:'',
    tournamentDescription:'',
    tournamentOpen:Date,
    tournamentStart:Date,
    stageName:0,
    tournamentClose:Date,
    tournamentType:'',
    tournamentRulesId:'',
    tournamentReportId:'',
  }

  submmited = false;

  constructor(private panitiaService:PanitiaService, 
    private router:ActivatedRoute,
    private route:Router,
    private csvService:CsvService) { }

  public ngOnInit(){

    // this.getTournament()

    $(document).ready(function() {
    $('#example').DataTable( {
        "order": [[ 3, "desc" ]]
    } );
} );


$(document).ready(function(){
$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
});
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

this.dataPage = this.router.snapshot.params['page']


  }

  onUploadFinished(file: FileHolder) {
    console.log(file);
  }

  onUploadStateChanged(state: boolean) {
    console.log(state);
  }

  createtournamentData():void {
    const data = {
      tournamentName:this.tournament.tournamentName,
      tournamentDescription:this.tournament.tournamentDescription,
      tournamentOpen:this.tournament.tournamentOpen,
      tournamentStart:this.tournament.tournamentStart,
      tournamentClose:this.tournament.tournamentClose,
      tournamentType:this.tournament.tournamentType,
      tjbournamentPict:this.tournament.tournamentPict,
    }
    this.panitiaService.createTournament(data)
    .subscribe(
      (response: any)=>{
        console.log(response);
        this.submmited = true;
      })
      this.alert = true
  }
  closeAlert(){
    this.alert = false
  }


  downloadCsv(){
    this.csvService.downloadFile(this.getData, 'jsontocsv');
  }


}
