import { PredictionRuleBookData } from './prediction-rule-book-data';
import { PeriodicElements, DashboardData } from './dashboard-data';
import { ContestantData } from './contestent-data';
import { MatchFixturesData } from './match-fixtures-data';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-sattebaaz-stats-board',
  templateUrl: './sattebaaz-stats-board.component.html',
  styleUrls: ['./sattebaaz-stats-board.component.scss']
})
export class SattebaazStatsBoardComponent implements OnInit {

  matches : any;
  contestants : any;
  top_5_contestant : PeriodicElements[];
  bottom_5_contestant : PeriodicElements[];
  top_5_contestant_dataSource : MatTableDataSource<PeriodicElements>;
  bottom_5_contestant_dataSorce : MatTableDataSource<PeriodicElements>;
  publishRules : any;
  predictionRules : any;
  appliedDate : string;
  minDate = new Date(2019, 2, 23);
  maxDate = new Date(2019, 4, 5);

  constructor(match : MatchFixturesData,
     contestant : ContestantData,
      private dashboardData : DashboardData,
      ruleBook : PredictionRuleBookData) {
    this.matches = match.getMatchData();
    this.contestants = contestant.getContestantData();
    this.publishRules = ruleBook.getPublishRules();
    this.predictionRules = ruleBook.getPredictionRules();
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
    if(event.value){
      this.appliedDate = (event.value).toDateString();
    } else {
      this.appliedDate = undefined;
    }
  }

  ngOnInit() {
    this.top_5_contestant = this.dashboardData.getTopFiveContestant();
    this.bottom_5_contestant = this.dashboardData.getBottomFiveContestant();
    this.top_5_contestant_dataSource = new MatTableDataSource(this.top_5_contestant);
    this.bottom_5_contestant_dataSorce = new MatTableDataSource(this.bottom_5_contestant);
  }

}
