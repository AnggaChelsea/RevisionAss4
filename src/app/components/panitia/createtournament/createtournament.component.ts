import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TournamentService } from '../../../shared/services/tournament/tournament.service';
import Swal from 'sweetalert2';

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

  tournament = {
    name:'',
    gambar:'',
    deskripsi:'',
    price:null,
    jumlah:null,
    deskripsisingkat:'',
  }

  submmited = false;

  constructor(private tournamentService:TournamentService) { }

  ngOnInit(){

    this.getTournament()

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
  }

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
  closeAlert(){
    this.alert = false
  }

  getTournament(){
    this.tournamentService.readAll()
    .subscribe(
      data=>{
      this.getData = data;
      console.log(this.getData);

      }
    )
  }


}
