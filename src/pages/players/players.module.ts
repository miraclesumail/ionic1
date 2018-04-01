import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayersPage } from './players';
import { DirectivesModule } from '../../directives/directives.module'
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PlayersPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayersPage),
    DirectivesModule,ComponentsModule
  ],
})
export class PlayersPageModule {}
