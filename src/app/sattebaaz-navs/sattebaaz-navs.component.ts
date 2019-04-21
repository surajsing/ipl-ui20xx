import { SattebaazDialogComponent } from './../sattebaaz-dialog/sattebaaz-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SattebaazCacheService } from '../sattebaaz-services/sattebaaz-cache.service';

@Component({
  selector: 'app-sattebaaz-navs',
  templateUrl: './sattebaaz-navs.component.html',
  styleUrls: ['./sattebaaz-navs.component.scss']
})
export class SattebaazNavsComponent implements OnInit {

  name : string;
  holdingValue : string;

  constructor(public dialog: MatDialog, private router: Router, private cacheService : SattebaazCacheService) { }

  getDialogData(){
    setTimeout(() => {
      let allData = this.cacheService.getData();
      if(localStorage.getItem('username')){
        allData.forEach(element => {
          switch(element['name']){
             case 'Suraj' : if(localStorage.getItem('username')==='suraj'){
              this.name = 'Suraj  ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Kailash' : if(localStorage.getItem('username')==='kailash'){
              this.name = 'Kailash';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Kalpesh' : if(localStorage.getItem('username')==='kalpesh'){
              this.name = 'Kalpesh';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Neeraj' : if(localStorage.getItem('username')==='neeraj'){
              this.name = 'Neeraj ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Pooja' : if(localStorage.getItem('username')==='pooja'){
              this.name = 'Pooja  ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Snehal' : if(localStorage.getItem('username')==='snehal'){
              this.name = 'Snehal ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Manasi' : if(localStorage.getItem('username')==='manasi'){
              this.name = 'Manasi ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Radhika' : if(localStorage.getItem('username')==='radhika'){
              this.name = 'Radhika';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Shruti' : if(localStorage.getItem('username')==='shruti'){
              this.name = 'Shruti ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Param' : if(localStorage.getItem('username')==='param'){
              this.name = 'Param  ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Pratik' : if(localStorage.getItem('username')==='pratik'){
              this.name = 'Pratik ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Tushar' : if(localStorage.getItem('username')==='tushar'){
              this.name = 'Tushar ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Neha' : if(localStorage.getItem('username')==='neha'){
              this.name = 'Neha   ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Siddhu' : if(localStorage.getItem('username')==='siddhu'){
              this.name = 'Siddhu ';
              this.holdingValue = element['holdingValue'];
             }
             break
             case 'Poonam' : if(localStorage.getItem('username')==='poonam'){
              this.name = 'Poonam ';
              this.holdingValue = element['holdingValue'];
             }
             break
          }
        });

      }
    }, 2000);
  }

  openDialogBox() : void{
    const dialogRef = this.dialog.open(SattebaazDialogComponent, {
      width: '250px',
      data: {name: this.name, holdingValue: this.holdingValue}
    });
  }

  logOut(){
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getDialogData();
  }

}
