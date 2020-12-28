import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../../../shared/services/tournament/tournament.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registertournament',
  templateUrl: './registertournament.component.html',
  styleUrls: ['./registertournament.component.css']
})
export class RegistertournamentComponent implements OnInit {

  constructor(private tournamentService:TournamentService) { }
  alert:boolean = false
  getData:any;
  tournament = {
    name:'',
    gambar:'',
    deskripsi:'',
    price:null,
    jumlah:null,
    deskripsisingkat:'',
  }
  submmited = false;
  curPage: number;
  pageSize: number;

  ngOnInit(){
    this.getDataParticipant()
  }

  getDataParticipant(){
    this.tournamentService.readAll()
    .subscribe(
      data=>{
        this.getData = data;
      }
    )}
  closeAlert(){
    this.alert = false

    this.curPage = 1;
    this.pageSize = 5;
  }
  numberOfPages() {
   return Math.ceil(this.getData.length / this.pageSize);
 };


  createtournament():void {
    const data = {
      name:this.tournament.name,
      gambar:this.tournament.gambar,
      deskripsi:this.tournament.deskripsi,
      price:this.tournament.price,
      jumlah:this.tournament.jumlah,
      deskripsisingkat:this.tournament.deskripsisingkat,
    }
    this.tournamentService.create(data)
    .subscribe(
      response=>{
        console.log(response);
        this.submmited = true;
      })
      this.alert = true
  }

}
