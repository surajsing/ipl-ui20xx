import { SattebaazDialogComponent } from './../sattebaaz-dialog/sattebaaz-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SattebaazCacheService } from '../sattebaaz-services/sattebaaz-cache.service';

@Component({
  selector: 'app-sattebaaz-navs',
  templateUrl: './sattebaaz-navs.component.html',
  styleUrls: ['./sattebaaz-navs.component.scss']
})
export class SattebaazNavsComponent implements OnInit {

  name: string;
  holdingValue: string;
  dialogOpened: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private cacheService: SattebaazCacheService) { }

  getDialogData() {
    setTimeout(() => {
      let allData = this.cacheService.getData();
      if ((sessionStorage.getItem('loginToken')) != null) {
        let token = sessionStorage.getItem('loginToken');
        let userName: string = atob(token);
        allData.forEach(element => {
          switch (element['name']) {
            case 'Suraj': if (userName === 'suraj') {
              this.name = 'Suraj  ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Kailash': if (userName === 'kailash') {
              this.name = 'Kailash';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Kalpesh': if (userName === 'kalpesh') {
              this.name = 'Kalpesh';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Neeraj': if (userName === 'neeraj') {
              this.name = 'Neeraj ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Pooja': if (userName === 'pooja') {
              this.name = 'Pooja  ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Snehal': if (userName === 'snehal') {
              this.name = 'Snehal ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Manasi': if (userName === 'manasi') {
              this.name = 'Manasi ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Radhika': if (userName === 'radhika') {
              this.name = 'Radhika';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Shruti': if (userName === 'shruti') {
              this.name = 'Shruti ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Param': if (userName === 'param') {
              this.name = 'Param  ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Pratik': if (userName === 'pratik') {
              this.name = 'Pratik ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Tushar': if (userName === 'tushar') {
              this.name = 'Tushar ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Neha': if (userName === 'neha') {
              this.name = 'Neha   ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Siddhu': if (userName === 'siddhu') {
              this.name = 'Siddhu ';
              this.holdingValue = element['holdingValue'];
            }
              break
            case 'Poonam': if (userName === 'poonam') {
              this.name = 'Poonam ';
              this.holdingValue = element['holdingValue'];
            }
              break
          }
        });

      }
    }, 2000);
  }

  openDialogBox(): void {
    const dialogRef = this.dialog.open(SattebaazDialogComponent, {
      width: '250px',
      data: { name: this.name, holdingValue: this.holdingValue }
    });

    dialogRef.afterOpened().subscribe(() => {
      this.dialogOpened = true;
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dialogOpened = false;
    });

  }

  logOut() {
    sessionStorage.removeItem('loginToken');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getDialogData();
  }

}
