import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CsvService } from 'src/app/shared/services/csv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentService } from 'src/app/shared/services/tournament/tournament.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css'],
})
export class CsvComponent implements OnInit {
  getData: any;
  tournaments: any;
  participants: any;
  page = 0;
  count: any;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  filter!: string;
  dataId: any;

  constructor(
    private csvService: CsvService,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.readTournament();
    this.getDataId();
    this.dataId = this.route.snapshot.params['_id'];
    this.dataId = this.route.snapshot.paramMap.get('_id');
    this.route.queryParams.subscribe((params) => {
      this.tournamentService.read(this.dataId).subscribe((data) => {});
    });
  }

  getDataId(): void {
    this.tournamentService.read(this.dataId).subscribe((data: any) => {
      this.dataId = data.tournament.participant.length;
    });
  }

  readTournament(): void {
    this.tournamentService.readAll().subscribe((data) => {
      this.tournaments = data.list;
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.readTournament();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readTournament();
  }

  downloadCsv() {
    this.downloadFile(this.tournaments);
  }

  downloadFile(data: any, filename = 'data') {
    let arrHeader = [
      'name',
      'age',
      'average',
      'approved',
      'description',
      'coba',
    ];
    let csvData = this.ConvertToCSV(data, arrHeader);
    console.log(csvData);
    let blob = new Blob(['\ufeff' + csvData], {
      type: 'text/csv;charset=utf-8;',
    });
    let dwldLink = document.createElement('a');
    let url = URL.createObjectURL(blob);
    let isSafariBrowser =
      navigator.userAgent.indexOf('Safari') != -1 &&
      navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
      //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', 'sample.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray: any, headerList: any) {
    console.log(objArray);
    console.log(headerList);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    let newHeaders = [
      'name',
      'age',
      'average',
      'approved',
      'description',
      'coba',
    ];

    for (let index in newHeaders) {
      row += newHeaders[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = i + 1 + '';
      for (let index in headerList) {
        let head = headerList[index];

        line += ',' + this.strRep(array[i][head]);
      }
      str += line + '\r\n';
    }
    return str;
  }

  strRep(data: any) {
    if (typeof data == 'string') {
      let newData = data.replace(/,/g, ' ');
      return newData;
    } else if (typeof data == 'undefined') {
      return '-';
    } else if (typeof data == 'number') {
      return data.toString();
    } else {
      return data;
    }
  }

  // readTournament(): void {
  //   this.tournamentService.readAll().subscribe((data) => {
  //     this.tournaments = data.list;
  //   });
  // }

  // onTableDataChange(event: any) {
  //   this.page = event;
  //   this.readTournament();
  // }

  // onTableSizeChange(event: any): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.readTournament();
  // }

  // downloadCsv() {
  //   console.log('csv');

  //   this.csvService.downloadFile(this.getData, 'jsontocsv');
  // }
}
