import { PredictionRuleBookData } from './prediction-rule-book-data';
import { PeriodicElements, DashboardData } from './dashboard-data';
import { ContestantData } from './contestent-data';
import { MatchFixturesData } from './match-fixtures-data';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

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

  ngOnInit() {
    this.top_5_contestant = this.dashboardData.getTopFiveContestant();
    this.bottom_5_contestant = this.dashboardData.getBottomFiveContestant();
    this.top_5_contestant_dataSource = new MatTableDataSource(this.top_5_contestant);
    this.bottom_5_contestant_dataSorce = new MatTableDataSource(this.bottom_5_contestant);
  }

}
