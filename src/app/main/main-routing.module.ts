import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NavigateComponent} from './shared/navigate/navigate.component';
import {MainPageComponent} from './main-page/main-page.component';
import {AllTodosPageComponent} from './Pages/all-todos-page/all-todos-page.component';
import {NotCompletedPageComponent} from './Pages/not-completed-page/not-completed-page.component';
import {CompletedPageComponent} from './Pages/completed-page/completed-page.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: '', redirectTo: '/main/allTodo', pathMatch: 'full'},
      {path: 'allTodo', component: AllTodosPageComponent},
      {path: 'todo', component: NotCompletedPageComponent},
      {path: 'completed', component: CompletedPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}

