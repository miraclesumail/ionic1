import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Eg3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eg3',
  templateUrl: 'eg3.html',
})
export class Eg3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navCtrl.getViews().length)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Eg3Page');
  }

  back(){
    this.navCtrl.goToRoot({
      animate:true,
      direction:'forward',
      duration:1500,
      easing:'swing'
    })
  }
}
