import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sattebaaz-home',
  templateUrl: './sattebaaz-home.component.html',
  styleUrls: ['./sattebaaz-home.component.scss']
})
export class SattebaazHomeComponent implements OnInit {

  constructor() { }

  isUserLoggedIn() {
    if ((sessionStorage.getItem('loginToken')) != null) {
      let token = sessionStorage.getItem('loginToken');
      let userName: string = atob(token);
      if ((userName === 'suraj') ||
        (userName === 'kailash') ||
        (userName === 'kalpesh') ||
        (userName === 'neeraj') ||
        (userName === 'pooja') ||
        (userName === 'manasi') ||
        (userName === 'radhika') ||
        (userName === 'snehal') ||
        (userName === 'pratik') ||
        (userName === 'siddhu') ||
        (userName === 'tushar') ||
        (userName === 'neha') ||
        (userName === 'param') ||
        (userName === 'poonam') ||
        (userName === 'shruti')) {
        return true;
      }
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
