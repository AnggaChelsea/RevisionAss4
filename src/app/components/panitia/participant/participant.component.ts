import { Component, OnInit } from '@angular/core';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'jquery';
import { Group, Participant } from 'src/app/shared/models/assign participant';
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
  participantForm = new FormGroup({
    _userId: new FormControl(''),
    _tournamentId: new FormControl('')
  })
  groupForm = new FormGroup({
    _groupId: new FormControl(''),
    _tournamentId: new FormControl('')
  })

  ngOnInit(){
    $(function() {
      $(document).ready(function() {
        $('#example').DataTable();
      });
    });

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

  assignpart():void {
    const participant : Participant = {
      _userId : this.participantForm.get('_userId')?.value,
      _tournamentId : this.participantForm.get('_tournamentId')?.value,
    }
    this.panitiaService.assignPart(participant).subscribe(res =>{console.log(res)})
  }
  kickPart():void {
    const participant : Participant = {
      _userId : this.participantForm.get('_userId')?.value,
      _tournamentId : this.participantForm.get('_tournamentId')?.value,
    }
    this.panitiaService.kickPart(participant).subscribe(res =>{console.log(res)})
  }
  assignGroup():void {
    const group : Group = {
      _groupId:this.groupForm.get('_groupId')?.value,
      _tournamentId:this.groupForm.get('_tournamentId')?.value
    }
    this.panitiaService.assignGroup(group).subscribe(res =>{console.log(res)})
  }
  kickGroup():void {
    const group : Group = {
      _groupId:this.groupForm.get('_groupId')?.value,
      _tournamentId:this.groupForm.get('_tournamentId')?.value
    }
    this.panitiaService.KickGroup(group).subscribe(res =>{console.log(res)})
  }
  // updateUser(): void {
  //   const user : UpdateUser = {
  //     name : this.profileForm.get('name').value,
  //     password : this.profileForm.get('password').value,
  //     firstname : this.profileForm.get('firstname').value,
  //     lastname : this.profileForm.get('lastname').value,
  //     address : this.profileForm.get('address').value,
  //     age : this.profileForm.get('age').value,
  //   };
  //   this.userService.updateUser(user).subscribe(res => {
  //     Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
  //     console.log(res)
  //   })
  // }

}
