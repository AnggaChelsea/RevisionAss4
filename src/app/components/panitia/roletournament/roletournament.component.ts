import { Component, OnInit } from '@angular/core';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service';

@Component({
  selector: 'app-roletournament',
  templateUrl: './roletournament.component.html',
  styleUrls: ['./roletournament.component.css']
})
export class RoletournamentComponent implements OnInit {

  constructor(private panitiaService:PanitiaService) { }

  load = false;

  rule = {
    minParticipant:Number,
    maxParticipant:Number,
    age:Number,
  }

  ngOnInit(): void {
  }

  cretaeRule(): void{
    const dataRule = {
      minParticipant:this.rule.minParticipant,
      maxParticipant:this.rule.maxParticipant,
      age:this.rule.age
    }
    this.panitiaService.createTournament(dataRule)
    .subscribe((response:any)=>{
      console.log(response)
      this.load = true
    })
  }

}
