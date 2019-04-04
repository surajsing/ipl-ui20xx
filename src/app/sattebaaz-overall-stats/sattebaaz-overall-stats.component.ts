import { Component, OnInit } from '@angular/core';
import { OverallStatsData, OverallStats } from './overall-stats-data';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: {
    elName: string,
    elProp: string
  };
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: { elName: 'Hydrogen', elProp: 'Gas' }, weight: 1.0079, symbol: 'H' },
  { position: 2, name: { elName: 'Helium', elProp: 'Gas' }, weight: 4.0026, symbol: 'He' },
  { position: 3, name: { elName: 'Lithium', elProp: 'Gas' }, weight: 6.941, symbol: 'Li' },
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-sattebaaz-overall-stats',
  templateUrl: './sattebaaz-overall-stats.component.html',
  styleUrls: ['./sattebaaz-overall-stats.component.scss'],
})
export class SattebaazOverallStatsComponent implements OnInit {

  dataSource: MatTableDataSource<OverallStats>;

  constructor(private overallStat: OverallStatsData) { }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol'];
  displayedColumns: string[] = ['fixtures', 'results',
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
  // dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.overallStat.getOverallIPLStats());
    console.log(this.dataSource);
    console.log(this.displayedColumns);
  }

}
