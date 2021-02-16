import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {CommonModule} from '@angular/common';

import {NavigateComponent} from './navigate/navigate.component';
import {MonthPageComponent} from './Pages/month-page/month-page.component';
import {WeekPageComponent} from './Pages/week-page/week-page.component';
import {DayPageComponent} from './Pages/day-page/day-page.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HourPageComponent } from './Pages/hour-page/hour-page.component';



@NgModule({
  declarations: [
    NavigateComponent,
    MonthPageComponent,
    WeekPageComponent,
    DayPageComponent,
    HourPageComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
})

export class MainModule {

}
