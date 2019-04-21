import { Component, OnInit } from '@angular/core';
import { OverallStatsData, OverallStats } from './overall-stats-data';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-sattebaaz-overall-stats',
  templateUrl: './sattebaaz-overall-stats.component.html',
  styleUrls: ['./sattebaaz-overall-stats.component.scss'],
})
export class SattebaazOverallStatsComponent implements OnInit {

  dataSource: MatTableDataSource<OverallStats>;

  constructor(private overallStat: OverallStatsData) { }

  isUserLoggedIn() {
    if (localStorage.getItem('username')) {
      if ((localStorage.getItem('username') === 'suraj') ||
        (localStorage.getItem('username') === 'kailash') ||
        (localStorage.getItem('username') === 'kalpesh') ||
        (localStorage.getItem('username') === 'neeraj') ||
        (localStorage.getItem('username') === 'pooja') ||
        (localStorage.getItem('username') === 'manasi') ||
        (localStorage.getItem('username') === 'radhika') ||
        (localStorage.getItem('username') === 'snehal') ||
        (localStorage.getItem('username') === 'pratik') ||
        (localStorage.getItem('username') === 'siddhu') ||
        (localStorage.getItem('username') === 'tushar') ||
        (localStorage.getItem('username') === 'neha') ||
        (localStorage.getItem('username') === 'param') ||
        (localStorage.getItem('username') === 'poonam') ||
        (localStorage.getItem('username') === 'shruti')) {
        return true;
      }
    } else {
      return false;
    }
  }

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
  }

}
