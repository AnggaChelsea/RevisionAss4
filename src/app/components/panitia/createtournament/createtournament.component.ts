import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service'
import { CsvService } from '../../../shared/services/csv.service';
import { FileHolder } from 'angular2-image-upload';
import { TournamentService } from '../../../shared/services/tournament/tournament.service';


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
  selectedFile:any;
  

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
  tournamentService: any;

  constructor(private panitiaService:PanitiaService, 
    private router:ActivatedRoute,
    private route:Router,
    tournamentService:TournamentService,
    private csvService:CsvService) { }

  public ngOnInit(){

   
this.dataPage = this.router.snapshot.params['page']
  }

  onFileChanged(event: { target: { files: any[]; }; }) {
    this.selectedFile = event.target.files[0]
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
    this.tournamentService.create(data, this.selectedFile)
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
