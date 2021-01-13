import { Component, OnInit } from '@angular/core';
import { Event, Router,NavigationStart, NavigationEnd  } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth/auth.service'
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-panitia',
  templateUrl: './panitia.component.html',
  styleUrls: ['./panitia.component.css']
})
export class PanitiaComponent implements OnInit {


  showLoadingIndicator = true
  form:any=FormGroup;
  panitia:any;

  constructor(private router:Router, private authService:AuthService, public fb: FormBuilder) {
    this.router.events.subscribe((routerEvent:Event)=>{

      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator = false;
      }
    })

    this.form = this.fb.group({
      tournamentName:[''],
      groupEntry:false,
      finished:false,
      tournamentOpen:[''],
      tournamentStart:[''],
      tournamentClose:[''],
      tournamentType:[''],
      stageName:0,
      tournamentPict:[''],
      tournamentDescription:['']
    })
  }

  ngOnInit(): void {
    this.getRole()
  }

  uploadFile(event:any){
    const file = <File>event.target.files[0]
    this.form.patchValue({
      picture:file
    });
    this.form.get('picture').updateValueAndValidity()
  }

  getRole(){
    return this.authService.getUser()
    .subscribe((data:any)=>{
      this.panitia = data.role
      console.log(this.panitia)
    })
  }


}
