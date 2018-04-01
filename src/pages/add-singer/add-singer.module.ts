import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSingerPage } from './add-singer';

@NgModule({
  declarations: [
    AddSingerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSingerPage),
  ],
})
export class AddSingerPageModule {}
