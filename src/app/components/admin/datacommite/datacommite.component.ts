import { Component, OnInit } from '@angular/core';


import 'jquery';
declare var $: any;

declare global {
  interface JQuery {
    (arg0: any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-datacommite',
  templateUrl: './datacommite.component.html',
  styleUrls: ['./datacommite.component.css']
})
export class DatacommiteComponent implements OnInit {

  constructor() { }

  public ngOnInit(){
    $(function() {
      $(document).ready(function() {
        $('#example').DataTable();
      });
    });
  }

}
