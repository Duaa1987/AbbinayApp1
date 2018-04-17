import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancerPage } from './cancer';

@NgModule({
  declarations: [
    CancerPage,
  ],
  imports: [
    IonicPageModule.forChild(CancerPage),
  ],
})
export class CancerPageModule {}
