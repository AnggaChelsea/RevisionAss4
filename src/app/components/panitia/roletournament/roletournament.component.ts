import { Component, OnInit } from '@angular/core';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, } from '@angular/forms';


@Component({
  selector: 'app-roletournament',
  templateUrl: './roletournament.component.html',
  styleUrls: ['./roletournament.component.css']
})
export class RoletournamentComponent implements OnInit {

  form:any=FormGroup;
  constructor(private panitiaService:PanitiaService, public router:Router, public fb:FormBuilder) { 
    this.form = this.fb.group({
      minParticipant:[null],
      maxParticipant:[null],
      age:[null]
    })
  }

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
    this.panitiaService.createRule(dataRule)
    .subscribe((response:any)=>{
      console.log(response)
      this.load = true
    })
  }

  // submitForm(){
  //   this.panitiaService.createRule(
  //     this.form.value.minParticipant,
  //     this.form.value.maxParticipant,
  //     this.form.value.age,
  //   ).subscribe(event:HttpEvent)
  // }

}
