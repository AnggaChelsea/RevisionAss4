import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../../../shared/services/participant/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(private participantServices:ParticipantService) { }
  dataParticipant:any;

  ngOnInit(): void {
  }

  getData(data:any){
    this.participantServices.readAllParticipant().subscribe(
      data=>{
        this.dataParticipant = data,
        console.log(data)
      }
    )
  }

}
