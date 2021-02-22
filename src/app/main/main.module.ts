import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MainPageComponent} from './main-page/main-page.component';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';
import {NavigateComponent} from './shared/navigate/navigate.component';
import {MonthPageComponent} from './Pages/month-page/month-page.component';
import {WeekPageComponent} from './Pages/week-page/week-page.component';
import {DayPageComponent} from './Pages/day-page/day-page.component';
import {HourPageComponent} from './Pages/hour-page/hour-page.component';
import {DragAndDropComponent} from './shared/drag-and-drop/drag-and-drop.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    MainPageComponent,
    ToolbarComponent,
    NavigateComponent,
    MonthPageComponent,
    WeekPageComponent,
    DayPageComponent,
    HourPageComponent,
    DragAndDropComponent
  ],
    imports: [
        MainRoutingModule,
        CommonModule,
        MatTabsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class MainModule {

}
