import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Eg2Page } from '../eg2/eg2'; 

/**
 * Generated class for the Eg1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eg1',
  templateUrl: 'eg1.html',
})
export class Eg1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Eg1Page');
  }

  go(){
    this.navCtrl.push(Eg2Page)
  }
   
}
