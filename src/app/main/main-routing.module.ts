import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NavigateComponent} from './navigate/navigate.component';
import {MonthPageComponent} from './Pages/month-page/month-page.component';
import {WeekPageComponent} from './Pages/week-page/week-page.component';
import {DayPageComponent} from './Pages/day-page/day-page.component';
import {HourPageComponent} from './Pages/hour-page/hour-page.component';

const routes: Routes = [
  {
    path: '', component: NavigateComponent, children: [
      {path: '', redirectTo: '/main/day', pathMatch: 'full'},
      {path: 'month', component: MonthPageComponent},
      {path: 'week', component: WeekPageComponent},
      {path: 'day', component: DayPageComponent},
      {path: 'hour', component: HourPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}

