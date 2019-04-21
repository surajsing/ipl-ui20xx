import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sattebaaz-overallstats-nav',
  templateUrl: './sattebaaz-overallstats-nav.component.html',
  styleUrls: ['./sattebaaz-overallstats-nav.component.scss']
})
export class SattebaazOverallstatsNavComponent implements OnInit {

  constructor(private router: Router) { }

  logOut(){
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
