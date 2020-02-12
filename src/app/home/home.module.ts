import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import * as fromComponents from './components';




@NgModule({
  declarations: [fromComponents.components],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
