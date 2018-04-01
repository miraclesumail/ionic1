import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Eg3Page } from '../eg3/eg3'; 

/**
 * Generated class for the Eg2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eg2',
  templateUrl: 'eg2.html',
})
export class Eg2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Eg2Page');
  }

  go(){
    //this.navCtrl.goToRoot({});
    //this.navCtrl.push(Eg3Page)
    this.navCtrl.setRoot(Eg3Page)
  }
}
