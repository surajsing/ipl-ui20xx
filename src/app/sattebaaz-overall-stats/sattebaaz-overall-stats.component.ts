import { Component, OnInit } from '@angular/core';
import { OverallStatsData, OverallStats } from './overall-stats-data';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sattebaaz-overall-stats',
  templateUrl: './sattebaaz-overall-stats.component.html',
  styleUrls: ['./sattebaaz-overall-stats.component.scss'],
})
export class SattebaazOverallStatsComponent implements OnInit {

  dataSource: MatTableDataSource<OverallStats>;

  constructor(private overallStat: OverallStatsData, private router: Router) { }

  displayedColumns: string[] = ['matchSequence', 'fixtures', 'results',
    'kalpeshBet', 'kalpeshHoldingValue',
    'kailashBet', 'kailashHoldingValue',
    'surajBet', 'surajHoldingValue',
    'neerajBet', 'neerajHoldingValue',
    'poojaBet', 'poojaHoldingValue',
    'snehalBet', 'snehalHoldingValue',
    'manasiBet', 'manasiHoldingValue',
    'radhikaBet', 'radhikaHoldingValue',
    'shrutiBet', 'shrutiHoldingValue',
    'paramBet', 'paramHoldingValue',
    'pratikBet', 'pratikHoldingValue',
    'tusharBet', 'tusharHoldingValue',
    'nehaBet', 'nehaHoldingValue',
    'siddhuBet', 'siddhuHoldingValue',
    'poonamBet', 'poonamHoldingValue'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.overallStat.getOverallIPLStats());
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300000);
  }

}
