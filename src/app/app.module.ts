import { OverallStatsData } from './sattebaaz-overall-stats/overall-stats-data';
import { ContestantData } from './sattebaaz-stats-board/contestent-data';
import { MatchFixturesData } from './sattebaaz-stats-board/match-fixtures-data';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SattebaazHeaderComponent } from './sattebaaz-header/sattebaaz-header.component';
import { SattebaazFooterComponent } from './sattebaaz-footer/sattebaaz-footer.component';
import { SattebaazIplComponent } from './sattebaaz-ipl/sattebaaz-ipl.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { SattebaazStatsBoardComponent } from './sattebaaz-stats-board/sattebaaz-stats-board.component';
import { SattebaazHomeComponent } from './sattebaaz-home/sattebaaz-home.component';
import { SattebaazOverallStatsComponent } from './sattebaaz-overall-stats/sattebaaz-overall-stats.component';
import { PredictionRuleBookData } from './sattebaaz-stats-board/prediction-rule-book-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SattebaazLastUpdateComponent } from './sattebaaz-last-update/sattebaaz-last-update.component';
import { SattebaazLoginComponent } from './sattebaaz-login/sattebaaz-login.component';
import { SattebaazNavsComponent } from './sattebaaz-navs/sattebaaz-navs.component';
import { SattebaazDialogComponent } from './sattebaaz-dialog/sattebaaz-dialog.component';
import { SattebaazErrorComponent } from './sattebaaz-error/sattebaaz-error.component';
import { SattebaazOverallstatsNavComponent } from './sattebaaz-overallstats-nav/sattebaaz-overallstats-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SattebaazHeaderComponent,
    SattebaazFooterComponent,
    SattebaazIplComponent,
    SattebaazStatsBoardComponent,
    SattebaazHomeComponent,
    SattebaazOverallStatsComponent,
    SattebaazLastUpdateComponent,
    SattebaazLoginComponent,
    SattebaazNavsComponent,
    SattebaazDialogComponent,
    SattebaazErrorComponent,
    SattebaazOverallstatsNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    MatchFixturesData,
    ContestantData,
    PredictionRuleBookData,
    OverallStatsData
  ],
  bootstrap: [AppComponent],
  entryComponents: [SattebaazLastUpdateComponent,SattebaazDialogComponent],
})
export class AppModule { }
