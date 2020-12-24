import { Component, OnInit } from '@angular/core';
import { Event, Router,NavigationStart, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-panitia',
  templateUrl: './panitia.component.html',
  styleUrls: ['./panitia.component.css']
})
export class PanitiaComponent implements OnInit {


  showLoadingIndicator = true

  constructor(private router:Router) {
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
  }

}
