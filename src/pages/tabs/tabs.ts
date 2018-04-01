import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = 'LotteryPage';
  tab2Root = 'ShopPage';
  tab3Root = 'HomePage';
  tab4Root = 'PersonPage';

  @ViewChild('mytabs') tabRef: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    

  }

  ionViewDidEnter(){
    let pageIndex = this.navParams.get('pageIndex');
    pageIndex ? this.tabRef.select(pageIndex) : this.tabRef.select(0)
  }

}
