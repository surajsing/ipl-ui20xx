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
  dashboardPre = [];
  dashboardPreData = {};

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
    let kalpeshTotal = 0, kailashTotal = 0, surajTotal = 0, neerajTotal = 0, poojaTotal = 0, snehalTotal = 0,
      manasiTotal = 0, radhikaTotal = 0, shrutiTotal = 0, paramTotal = 0, pratikTotal = 0, tusharTotal = 0,
      nehaTotal = 0, siddhuTotal = 0, poonamTotal = 0;
    this.contestantStatsData.forEach(element => {
      let contData: [] = element['contestantStats'];
      contData.forEach(data => {
        switch (data['name']) {
          case 'Kalpesh': kalpeshTotal = kalpeshTotal + parseFloat(data['holdingValue']);
            break
          case 'Kailash': kailashTotal = kailashTotal + parseFloat(data['holdingValue']);
            break
          case 'Suraj': surajTotal = surajTotal + parseFloat(data['holdingValue']);
            break
          case 'Neeraj': neerajTotal = neerajTotal + parseFloat(data['holdingValue']);
            break
          case 'Pooja': poojaTotal = poojaTotal + parseFloat(data['holdingValue']);
            break
          case 'Snehal': snehalTotal = snehalTotal + parseFloat(data['holdingValue']);
            break
          case 'Manasi': manasiTotal = manasiTotal + parseFloat(data['holdingValue']);
            break
          case 'Radhika': radhikaTotal = radhikaTotal + parseFloat(data['holdingValue']);
            break
          case 'Shruti': shrutiTotal = shrutiTotal + parseFloat(data['holdingValue']);
            break
          case 'Param': paramTotal = paramTotal + parseFloat(data['holdingValue']);
            break
          case 'Pratik': pratikTotal = pratikTotal + parseFloat(data['holdingValue']);
            break
          case 'Tushar': tusharTotal = tusharTotal + parseFloat(data['holdingValue']);
            break
          case 'Neha': nehaTotal = nehaTotal + parseFloat(data['holdingValue']);
            break
          case 'Siddhu': siddhuTotal = siddhuTotal + parseFloat(data['holdingValue']);
            break
          case 'Poonam': poonamTotal = poonamTotal + parseFloat(data['holdingValue']);
            break
        }
      })
    });
    this.contestants[0]['currentHoldingValue'] = (surajTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[0]['name']['firstName'];
    this.dashboardPreData['weight'] = surajTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[1]['currentHoldingValue'] = (kailashTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[1]['name']['firstName'];
    this.dashboardPreData['weight'] = kailashTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[2]['currentHoldingValue'] = (kalpeshTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[2]['name']['firstName'];
    this.dashboardPreData['weight'] = kalpeshTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[3]['currentHoldingValue'] = (neerajTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[3]['name']['firstName'];
    this.dashboardPreData['weight'] = neerajTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[4]['currentHoldingValue'] = (poojaTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[4]['name']['firstName'];
    this.dashboardPreData['weight'] = poojaTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[5]['currentHoldingValue'] = (snehalTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[5]['name']['firstName'];
    this.dashboardPreData['weight'] = snehalTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[6]['currentHoldingValue'] = (manasiTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[6]['name']['firstName'];
    this.dashboardPreData['weight'] = manasiTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[7]['currentHoldingValue'] = (radhikaTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[7]['name']['firstName'];
    this.dashboardPreData['weight'] = radhikaTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[8]['currentHoldingValue'] = (shrutiTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[8]['name']['firstName'];
    this.dashboardPreData['weight'] = shrutiTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[9]['currentHoldingValue'] = (paramTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[9]['name']['firstName'];
    this.dashboardPreData['weight'] = paramTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[10]['currentHoldingValue'] = (pratikTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[10]['name']['firstName'];
    this.dashboardPreData['weight'] = pratikTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[11]['currentHoldingValue'] = (tusharTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[11]['name']['firstName'];
    this.dashboardPreData['weight'] = tusharTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[12]['currentHoldingValue'] = (nehaTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[12]['name']['firstName'];
    this.dashboardPreData['weight'] = nehaTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[13]['currentHoldingValue'] = (siddhuTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[13]['name']['firstName'];
    this.dashboardPreData['weight'] = siddhuTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    this.contestants[14]['currentHoldingValue'] = (poonamTotal.toFixed(2) + ' ' + 'INR');
    this.dashboardPreData['name'] = this.contestants[14]['name']['firstName'];
    this.dashboardPreData['weight'] = poonamTotal.toFixed(2);
    this.dashboardPre.push(this.dashboardPreData);
    this.dashboardPreData = {};

    let topOrder = [...this.dashboardPre];

    topOrder.sort(function (a, b) {
      return b.weight - a.weight;
    });

    this.top_5_contestant = topOrder.splice(0, 5);

    let bottomOrder = [...this.dashboardPre];

    bottomOrder.sort(function (a, b) {
      return a.weight - b.weight;
    });

    this.bottom_5_contestant = bottomOrder.splice(0, 5);
  }

  ngOnInit() {
    this.contestants = this.contestant.getContestantData();
    this.getContestantStatsData();
    this.top_5_contestant_dataSource = new MatTableDataSource(this.top_5_contestant);
    this.bottom_5_contestant_dataSorce = new MatTableDataSource(this.bottom_5_contestant);
  }

}
