import { Component, OnInit } from '@angular/core';
import { Event, Router,NavigationStart, NavigationEnd  } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth/auth.service'
@Component({
  selector: 'app-panitia',
  templateUrl: './panitia.component.html',
  styleUrls: ['./panitia.component.css']
})
export class PanitiaComponent implements OnInit {


  showLoadingIndicator = true

  panitia:any;

  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private router:Router, private authService:AuthService) {
    this.router.events.subscribe((routerEvent:Event)=>{

      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator = false;
      }
    })
  }

  ngOnInit(): void {
    this.getRole()
  }

  getRole(){
    return this.authService.getUser()
    .subscribe((data:any)=>{
      this.panitia = data.role
      console.log(this.panitia)
    })
  }


}
