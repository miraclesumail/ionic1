import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimatePage } from './animate';

@NgModule({
  declarations: [
    AnimatePage,
  ],
  imports: [
    IonicPageModule.forChild(AnimatePage),
  ],
})
export class AnimatePageModule {}
