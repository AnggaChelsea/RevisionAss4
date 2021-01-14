import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PanitiaService } from '../../../shared/services/panitia/panitia.service';
import { CsvService } from '../../../shared/services/csv.service';
import { FileHolder } from 'angular2-image-upload';
import { TournamentService } from '../../../shared/services/tournament/tournament.service';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import 'jquery';
import Swal from 'sweetalert2';
declare var $: JQuery;

declare global {
  interface JQuery {
    (Jquery: any): JQuery;
    bracket(options: any): JQuery;
  }
}

@Component({
  selector: 'app-createtournament',
  templateUrl: './createtournament.component.html',
  styleUrls: ['./createtournament.component.css'],
})
export class CreatetournamentComponent implements OnInit {
  alert: boolean = false;
  getData: any;
  images = [];
  dataPage: any;
  selectedFile: any;

  testUpload: any = {};

  submmited = false;
  tournamentService: any;
  tournamentPict: any = null;
  createForm: any = FormGroup;
  Form: any = {};

  constructor(
    private panitiaService: PanitiaService,
    private router: ActivatedRoute,
    private route: Router,
    tournamentService: TournamentService,
    private csvService: CsvService,
    private http: HttpClient,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.createForm = this.fb.group({
      tournamentName: [''],
      tournamentOpen: [''],
      tournamentStart: [''],
      tournamentClose: [''],
      tournamentType: [''],
      rulesName: [''],
      groupEntry: [''],
      tournamentDescription: [''],
      tournamentPict: [''],
    });
  }

  public ngOnInit() {
    // this.createtournamentData();
  }

  uploadFile(event: any) {
    this.tournamentPict = <File>event.target.files[0];

    // this.tournamentPict.patchValue({
    //   tournamentPict: file,
    // });
  }

  upload(event: any) {
    console.log('rere');
    console.log(this.createForm);

    const value: any = this.createForm.value;
    this.Form = {
      groupEntry: value.groupEntry,
      rulesName: value.rulesName,
      tournamentOpen: value.tournamentOpen,
      tournamentStart: value.tournamentStart,
      tournamentClose: value.tournamentClose,
      tournamentName: value.tournamentName,
      tournamentDescription: value.tournamentDescription,
    };

    const fd = new FormData();
    fd.append('tournamentPict', this.tournamentPict, this.tournamentPict.name);
    fd.append('test', this.testUpload.test);

    // this.http
    //   .post(`${environment.urlAddress}user/tester`, fd)
    //   .subscribe((res) => console.log(res));
  }

  createTournament() {}
  // createTournament() {
  //   this.panitiaService
  //     .createGame(
  //       this.form.value.tournamentName,
  //       this.form.value.groupEntry,
  //       this.form.value.finished,
  //       this.form.this.value.tournamentOpen,
  //       this.form.value.tournamentStart,
  //       this.form.value.tournamentClose,
  //       this.form.value.tournamentType,
  //       this.form.value.stageName,
  //       this.form.value.tournamentPict,
  //       this.form.value.tournamentDescription
  //     )
  //     .subscribe((event: HttpEvent<any>) => {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Tournament Created',
  //         text: `you can update ur fullname and picture`,
  //       });
  //     });
  // }

  // pushTournament() {
  //   this.panitiaService
  //     .createGame
  //     this.form.value.tournamentName,
  //     this.form.value.groupEntry,
  //     this.form.value.finished,
  //     this.form.this.value.tournamentOpen,
  //     this.form.value.tournamentStart,
  //     this.form.value.tournamentClose,
  //     this.form.value.tournamentType,
  //     this.form.value.stageName,
  //     this.form.value.tournamentPict,
  //     this.form.value.tournamentDescription
  //     ()
  //     .subscribe(
  //       (response: any) => {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'role created',
  //           text: 'Set this role as a tournament',
  //         });
  //       },
  //       (error) => {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'check all forms anymore',
  //           text: `${error.error.message}`,
  //         });
  //       }
  //     );
  // }

  // uploadFile(event:any){
  //   const file = <File>event.target.files[0]
  //   this.form.patchValue({
  //     picture:file
  //   });
  //   this.form.get('picture').updateValueAndValidity()
  // }

  // createTournament() {}

  // createtournamentData(){
  //   const data = {
  //     tournamentName: this.tournament.tournamentName,
  //     groupEntry:this.tournament.groupEntry,
  //     tournamentOpen: this.tournament.tournamentOpen,
  //     tournamentStart: this.tournament.tournamentStart,
  //     tournamentClose: this.tournament.tournamentClose,
  //     tournamentType: this.tournament.tournamentType,
  //     stageName:this.tournament.stageName,
  //     tournamentPict: this.tournament.tournamentPict,
  //     tournamentDescription: this.tournament.tournamentDescription,
  //   };
  //   this.tournamentService
  //     .create(data, this.selectedFile)
  //     .subscribe((response: any) => {
  //       console.log(response);
  //       this.submmited = true;
  //     });
  //   this.alert = true;
  // }

  closeAlert() {
    this.alert = false;
  }

  downloadCsv() {
    this.csvService.downloadFile(this.getData, 'jsontocsv');
  }
}
