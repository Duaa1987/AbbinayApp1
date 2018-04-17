import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonCancerPage } from './non-cancer';

@NgModule({
  declarations: [
    NonCancerPage,
  ],
  imports: [
    IonicPageModule.forChild(NonCancerPage),
  ],
})
export class NonCancerPageModule {}
