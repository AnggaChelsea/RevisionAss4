import { Component, OnInit } from '@angular/core';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service';

import 'jquery';
declare var $: JQuery;

declare global {
  interface JQuery {
    (Jquery:any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(private panitiaService:PanitiaService) { }
  dataParticipant:any;

  ngOnInit(){
    this.getParticipant()
  }

  getParticipant(){
    this.panitiaService.getData()
    .subscribe(data=>{
      this.dataParticipant = data;
      console.log(this.dataParticipant);
    },error => {
      console.log(error)
    })

  }

}
