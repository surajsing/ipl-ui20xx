import { MatchFixturesData } from './../sattebaaz-stats-board/match-fixtures-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sattebaaz-last-update',
  templateUrl: './sattebaaz-last-update.component.html',
  styleUrls: ['./sattebaaz-last-update.component.scss']
})
export class SattebaazLastUpdateComponent implements OnInit {

  lastUpdatedDate: String;

  constructor(private matchDate: MatchFixturesData) { }

  getLastUpdatedDate(matchData: any) {
    let lastDateIteration: Date;
    matchData.forEach(element => {
      if (element['winner'] != 'NYD') {
        lastDateIteration = element['date'];
      }
      return;
    });
    this.setLastUpdatedDate(lastDateIteration);
  }

  setLastUpdatedDate(lastUpdate: Date) {
    let dateArr = lastUpdate.toDateString().split(' ');
    this.lastUpdatedDate = dateArr[2] + '-' + dateArr[1].toUpperCase() + '-' + dateArr[3];
  }

  ngOnInit() {
    this.getLastUpdatedDate(this.matchDate.getMatchData());
  }

}
