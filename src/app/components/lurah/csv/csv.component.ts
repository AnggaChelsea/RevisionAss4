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
    console.log('csv');

    this.csvService.downloadFile(this.getData, 'jsontocsv');
  }
}
