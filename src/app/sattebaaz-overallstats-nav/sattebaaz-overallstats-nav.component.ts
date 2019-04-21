import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SattebaazCacheService } from '../sattebaaz-services/sattebaaz-cache.service';

@Component({
  selector: 'app-sattebaaz-overallstats-nav',
  templateUrl: './sattebaaz-overallstats-nav.component.html',
  styleUrls: ['./sattebaaz-overallstats-nav.component.scss']
})
export class SattebaazOverallstatsNavComponent implements OnInit {

  name: string;

  constructor(private router: Router) { }

  getLoggedInUser() {
    setTimeout(() => {
      let username = localStorage.getItem('username');
      if (username != null) {
        switch (username) {
          case 'suraj': this.name = 'Suraj  ';
            break
            case 'kailash': this.name = 'Kailash';
            break
            case 'kalpesh': this.name = 'Kalpesh';
            break
            case 'neeraj': this.name = 'Neeraj ';
            break
            case 'manasi': this.name = 'Manasi ';
            break
            case 'siddhu': this.name = 'Siddhu ';
            break
            case 'pooja': this.name = 'Pooja  ';
            break
            case 'radhika': this.name = 'Radhika';
            break
            case 'snehal': this.name = 'Snehal ';
            break
            case 'pratik': this.name = 'Pratik ';
            break
            case 'neha': this.name = 'Neha   ';
            break
            case 'param': this.name = 'Param  ';
            break
            case 'tushar': this.name = 'Tushar ';
            break
            case 'poonam': this.name = 'Poonam ';
            break
            case 'shruti': this.name = 'Shruti ';
            break
        }
      }

    }, 1500);
  }

  logOut() {
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getLoggedInUser();
  }

}
