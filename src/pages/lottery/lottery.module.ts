import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LotteryPage } from './lottery';

@NgModule({
  declarations: [
    LotteryPage,
  ],
  imports: [
    IonicPageModule.forChild(LotteryPage),
  ],
})
export class LotteryPageModule {}
