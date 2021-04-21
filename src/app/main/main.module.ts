import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MainPageComponent} from './main-page/main-page.component';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';
import {NavigateComponent} from './shared/navigate/navigate.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TodosPageComponent } from './Pages/todos-page/todos-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ToolbarComponent,
    NavigateComponent,
    TodosPageComponent,

  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class MainModule {

}
