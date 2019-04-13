import { PredictionRuleBookData } from './prediction-rule-book-data';
import { PeriodicElements, DashboardData } from './dashboard-data';
import { ContestantData } from './contestent-data';
import { MatchFixturesData } from './match-fixtures-data';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { OverallStatsData } from '../sattebaaz-overall-stats/overall-stats-data';

@Component({
  selector: 'app-sattebaaz-stats-board',
  templateUrl: './sattebaaz-stats-board.component.html',
  styleUrls: ['./sattebaaz-stats-board.component.scss']
})
export class SattebaazStatsBoardComponent implements OnInit {

  matches: any;
  contestants: any;
  top_5_contestant: PeriodicElements[];
  bottom_5_contestant: PeriodicElements[];
  top_5_contestant_dataSource: MatTableDataSource<PeriodicElements>;
  bottom_5_contestant_dataSorce: MatTableDataSource<PeriodicElements>;
  publishRules: any;
  predictionRules: any;
  appliedDate: string;
  minDate = new Date(2019, 2, 23);
  maxDate = new Date(2019, 4, 5);
  contestantStatsData = [];

  constructor(match: MatchFixturesData,
    private contestant: ContestantData,
    private dashboardData: DashboardData,
    ruleBook: PredictionRuleBookData,
    statsData: OverallStatsData) {
    this.matches = match.getMatchData();
    this.publishRules = ruleBook.getPublishRules();
    this.predictionRules = ruleBook.getPredictionRules();
    this.contestantStatsData = statsData.getOverallIPLStats();
  }

  displayedColumns: string[] = ['name', 'weight'];

  applyFilterTopFive(filterValue: string) {
    this.top_5_contestant_dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterBottomFive(filterValue: string) {
    this.bottom_5_contestant_dataSorce.filter = filterValue.trim().toLowerCase();
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    if (event.value) {
      this.appliedDate = (event.value).toDateString();
    } else {
      this.appliedDate = undefined;
    }
  }

  getContestantStatsData() {
    let kalpeshTotal = 0, kailashTotal = 0,surajTotal = 0, neerajTotal = 0, poojaTotal = 0, snehalTotal = 0,
    manasiTotal = 0, radhikaTotal = 0, shrutiTotal = 0, paramTotal = 0, pratikTotal = 0, tusharTotal = 0,
    nehaTotal = 0, siddhuTotal = 0, poonamTotal = 0;
    this.contestantStatsData.forEach(element => {
      let contData: [] = element['contestantStats'];
      contData.forEach(data => {
        switch(data['name']){
          case 'Kalpesh':kalpeshTotal=kalpeshTotal+parseFloat(data['holdingValue']);
          break
          case 'Kailash':kailashTotal=kailashTotal+parseFloat(data['holdingValue']);
          break
          case 'Suraj':surajTotal=surajTotal+parseFloat(data['holdingValue']);
          break
          case 'Neeraj':neerajTotal=neerajTotal+parseFloat(data['holdingValue']);
          break
          case 'Pooja':poojaTotal=poojaTotal+parseFloat(data['holdingValue']);
          break
          case 'Snehal':snehalTotal=snehalTotal+parseFloat(data['holdingValue']);
          break
          case 'Manasi':manasiTotal=manasiTotal+parseFloat(data['holdingValue']);
          break
          case 'Radhika':radhikaTotal=radhikaTotal+parseFloat(data['holdingValue']);
          break
          case 'Shruti':shrutiTotal=shrutiTotal+parseFloat(data['holdingValue']);
          break
          case 'Param':paramTotal=paramTotal+parseFloat(data['holdingValue']);
          break
          case 'Pratik':pratikTotal=pratikTotal+parseFloat(data['holdingValue']);
          break
          case 'Tushar':tusharTotal=tusharTotal+parseFloat(data['holdingValue']);
          break
          case 'Neha':nehaTotal=nehaTotal+parseFloat(data['holdingValue']);
          break
          case 'Siddhu':siddhuTotal=siddhuTotal+parseFloat(data['holdingValue']);
          break
          case 'Poonam':poonamTotal=poonamTotal+parseFloat(data['holdingValue']);
          break
        }
      })
    });
    this.contestants[0]['currentHoldingValue']=(surajTotal.toFixed(2)+' '+'INR');
    this.contestants[1]['currentHoldingValue']=(kailashTotal.toFixed(2)+' '+'INR');
    this.contestants[2]['currentHoldingValue']=(kalpeshTotal.toFixed(2)+' '+'INR');
    this.contestants[3]['currentHoldingValue']=(neerajTotal.toFixed(2)+' '+'INR');
    this.contestants[4]['currentHoldingValue']=(poojaTotal.toFixed(2)+' '+'INR');
    this.contestants[5]['currentHoldingValue']=(snehalTotal.toFixed(2)+' '+'INR');
    this.contestants[6]['currentHoldingValue']=(manasiTotal.toFixed(2)+' '+'INR');
    this.contestants[7]['currentHoldingValue']=(radhikaTotal.toFixed(2)+' '+'INR');
    this.contestants[8]['currentHoldingValue']=(shrutiTotal.toFixed(2)+' '+'INR');
    this.contestants[9]['currentHoldingValue']=(paramTotal.toFixed(2)+' '+'INR');
    this.contestants[10]['currentHoldingValue']=(pratikTotal.toFixed(2)+' '+'INR');
    this.contestants[11]['currentHoldingValue']=(tusharTotal.toFixed(2)+' '+'INR');
    this.contestants[12]['currentHoldingValue']=(nehaTotal.toFixed(2)+' '+'INR');
    this.contestants[13]['currentHoldingValue']=(siddhuTotal.toFixed(2)+' '+'INR');
    this.contestants[14]['currentHoldingValue']=(poonamTotal.toFixed(2)+' '+'INR');
  }

  ngOnInit() {
    this.top_5_contestant = this.dashboardData.getTopFiveContestant();
    this.bottom_5_contestant = this.dashboardData.getBottomFiveContestant();
    this.top_5_contestant_dataSource = new MatTableDataSource(this.top_5_contestant);
    this.bottom_5_contestant_dataSorce = new MatTableDataSource(this.bottom_5_contestant);
    this.contestants = this.contestant.getContestantData();
    this.getContestantStatsData();
  }

}
