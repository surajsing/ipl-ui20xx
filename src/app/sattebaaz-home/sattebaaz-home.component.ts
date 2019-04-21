import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sattebaaz-home',
  templateUrl: './sattebaaz-home.component.html',
  styleUrls: ['./sattebaaz-home.component.scss']
})
export class SattebaazHomeComponent implements OnInit {

  constructor() { }

  isUserLoggedIn(){
    if(localStorage.getItem('username') && (localStorage.getItem('username')==='suraj')){
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
