import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sattebaaz-home',
  templateUrl: './sattebaaz-home.component.html',
  styleUrls: ['./sattebaaz-home.component.scss']
})
export class SattebaazHomeComponent implements OnInit {

  constructor() { }

  isUserLoggedIn() {
    if (localStorage.getItem('username')) {
      if ((localStorage.getItem('username') === 'suraj') ||
        (localStorage.getItem('username') === 'kailash') ||
        (localStorage.getItem('username') === 'kalpesh') ||
        (localStorage.getItem('username') === 'neeraj') ||
        (localStorage.getItem('username') === 'pooja') ||
        (localStorage.getItem('username') === 'manasi') ||
        (localStorage.getItem('username') === 'radhika') ||
        (localStorage.getItem('username') === 'snehal') ||
        (localStorage.getItem('username') === 'pratik') ||
        (localStorage.getItem('username') === 'siddhu') ||
        (localStorage.getItem('username') === 'tushar') ||
        (localStorage.getItem('username') === 'neha') ||
        (localStorage.getItem('username') === 'param') ||
        (localStorage.getItem('username') === 'poonam') ||
        (localStorage.getItem('username') === 'shruti')) {
        return true;
      }
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
