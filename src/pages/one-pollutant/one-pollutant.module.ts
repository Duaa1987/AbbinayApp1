import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnePollutantPage } from './one-pollutant';

@NgModule({
  declarations: [
    OnePollutantPage,
  ],
  imports: [
    IonicPageModule.forChild(OnePollutantPage),
  ],
})
export class OnePollutantPageModule {}
