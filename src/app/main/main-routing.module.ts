import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './Pages/main-page/main-page.component';




const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'main'},
      {path: 'main', component: MainPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
