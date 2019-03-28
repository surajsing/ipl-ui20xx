import { SattebaazOverallStatsComponent } from './sattebaaz-overall-stats/sattebaaz-overall-stats.component';
import { SattebaazHomeComponent } from './sattebaaz-home/sattebaaz-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path : 'sattebaaz-home',
  //   component : SattebaazHomeComponent
  // },
  {
    path : 'overallStats',
    component : SattebaazOverallStatsComponent
  },
  {
    path : '**',
    component : SattebaazHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
