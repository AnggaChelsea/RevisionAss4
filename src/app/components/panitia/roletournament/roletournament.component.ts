import { Component, OnInit } from '@angular/core';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, } from '@angular/forms';
import Swal from 'sweetalert2'

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

  ngOnInit(): void {

  }
 
  submitForm(){
    this.panitiaService.createRule(
      this.form.value.minParticipant,
      this.form.value.maxParticipant,
      this.form.value.age,
    ).subscribe((data:any)=>{
      Swal.fire({
        icon:'success',
        title:'role created',
        text: 'Set this role as a tournament'
      })
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title:'check all forms anymore',
        text: `${error.error.message}`
      })
    }
    )
  }

  pushRole(){
    this.panitiaService.createRule(this.form.value.minParticipant, this.form.value.maxParticipant, this.form.value.age)
    .subscribe((response)=>{
      console.log(response)
      Swal.fire({
        icon:'success',
        title:'role created',
        text: 'Set this role as a tournament'
      })
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title:'check all forms anymore',
        text: `${error.error.message}`
      })
    }
    )
  }

}
