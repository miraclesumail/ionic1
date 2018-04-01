import { Component } from '@angular/core';
import { IonicPage, NavController,App, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'
import { ShareProvider } from '../../providers/share/share'


/**
 * Generated class for the LotteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lottery',
  templateUrl: 'lottery.html',
})
export class LotteryPage {
  lottery:any = [];
  activeIndex:number;

  constructor(public navCtrl: NavController,public app:App,public http:HttpProvider,public share:ShareProvider, public navParams: NavParams) {
      this.http.fetchData('./assets/lottery.json', (res)=> {
           this.lottery = res.list
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LotteryPage');
  }

  toggle(item){
     //if(item.hasOwnProperty)
     //!item.show ? item.show = true : item.show = false
     if(this.activeIndex == this.lottery.indexOf(item)) {
        this.activeIndex = null;
        return
     }
     this.activeIndex = this.lottery.indexOf(item)
     console.log(this.activeIndex)
  }

  goPage(nav,page){
      this.share.pid = nav.pid;
      this.app.getRootNav().push(page,{nav:nav});
  }
}
