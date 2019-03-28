import { PredictionRuleBookData } from './prediction-rule-book-data';
import { PeriodicElements, DashboardData } from './dashboard-data';
import { ContestentData } from './contestent-data';
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
  contestents : any;
  top_5_contestent : PeriodicElements[];
  bottom_5_contestent : PeriodicElements[];
  top_5_contestent_dataSource : MatTableDataSource<PeriodicElements>;
  bottom_5_contestent_dataSorce : MatTableDataSource<PeriodicElements>;
  publishRules : any;
  predictionRules : any;

  constructor(match : MatchFixturesData,
     contestent : ContestentData,
      private dashboardData : DashboardData,
      ruleBook : PredictionRuleBookData) {
    this.matches = match.getMatchData();
    this.contestents = contestent.getContestentData();
    this.publishRules = ruleBook.getPublishRules();
    this.predictionRules = ruleBook.getPredictionRules();
   }

  displayedColumns: string[] = ['name', 'weight'];

  applyFilterTopFive(filterValue: string) {
    this.top_5_contestent_dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterBottomFive(filterValue: string) {
    this.bottom_5_contestent_dataSorce.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.top_5_contestent = this.dashboardData.getTopFiveContestent();
    this.bottom_5_contestent = this.dashboardData.getBottomFiveContestent();
    this.top_5_contestent_dataSource = new MatTableDataSource(this.top_5_contestent);
    this.bottom_5_contestent_dataSorce = new MatTableDataSource(this.bottom_5_contestent);
  }

}
