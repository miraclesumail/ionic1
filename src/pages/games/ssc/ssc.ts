import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Effect } from '../../../providers/effect'
import { GameConfigProvider } from '../../../providers/game-config/game-config'
/**
 * Generated class for the Eg3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'ssc',
  templateUrl: 'ssc.html',
})
export class SscPage extends Effect{

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameConfig: GameConfigProvider) {
    super();  
    console.log(this.navParams.get('nav'))
    this.say()
    gameConfig.fetchMethedsList()
    gameConfig.fetchMethedsList()
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      //refresher.complete();
    }, 2000);
  }

  doPull(refresher){
      console.log('wwww',refresher);
      console.log(refresher.deltaY)
  }
}
