import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Assign } from 'src/app/shared/models/Lurah';
import { LurahService } from 'src/app/shared/services/lurah/lurah.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  constructor(private lurahService: LurahService,public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  assignForm:any = new FormGroup({
    _id: new FormControl(''),
    subDistrict: new FormControl('')
  })
  Assign():void {
    const assign: Assign ={
      _id : this.assignForm.get('_id').value,
      subDistrict: this.assignForm.get('subDistrict').value
    }
    this.lurahService.assign(assign).subscribe(response => {
      console.log(response)
    })
  }

}
