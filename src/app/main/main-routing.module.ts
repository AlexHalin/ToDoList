import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './Pages/main-page/main-page.component';
import {AuthGuard} from '../auth/services/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

