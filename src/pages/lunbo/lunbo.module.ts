import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LunboPage } from './lunbo';

@NgModule({
  declarations: [
    LunboPage,
  ],
  imports: [
    IonicPageModule.forChild(LunboPage),
  ],
})
export class LunboPageModule {}
