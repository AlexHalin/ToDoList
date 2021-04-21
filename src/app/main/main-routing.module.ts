import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {TodosPageComponent} from './Pages/todos-page/todos-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: '', redirectTo: '/main/all-todo', pathMatch: 'full'},
      {path: 'all-todo', component: TodosPageComponent},
      {path: 'todo', component: TodosPageComponent},
      {path: 'completed', component: TodosPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}

