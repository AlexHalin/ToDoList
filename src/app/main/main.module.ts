import { NgModule } from '@angular/core';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [MainRoutingModule
  ]
})

export class MainModule {

}
