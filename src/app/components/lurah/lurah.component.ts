import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Assign } from 'src/app/shared/models/Lurah';
import { LurahService } from 'src/app/shared/services/lurah/lurah.service';

@Component({
  selector: 'app-lurah',
  templateUrl: './lurah.component.html',
  styleUrls: ['./lurah.component.css']
})
export class LurahComponent implements OnInit {

  constructor(private lurahService: LurahService,public fb: FormBuilder) { }

  ngOnInit(): void {
  }
 

}
