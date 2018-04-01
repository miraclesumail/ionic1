import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SscPage } from './ssc';

@NgModule({
  declarations: [
    SscPage,
  ],
  imports: [
    IonicPageModule.forChild(SscPage),
  ],
})
export class SscPageModule {}
