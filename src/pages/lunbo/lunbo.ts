import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Slides } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'
/**
 * Generated class for the LunboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunbo',
  templateUrl: 'lunbo.html',
})
export class LunboPage {
  @ViewChild('slides ') slides: Slides;

  private images:Array<{name:string, src:string}> = [
    {name:'qqqq', src:'./assets/imgs/lunbo1.jpg'},
    {name:'qqqq', src:'./assets/imgs/lunbo2.jpg'},
    {name:'qqqq', src:'./assets/imgs/lunbo3.jpg'},
    {name:'qqqq', src:'./assets/imgs/lunbo4.jpg'}
  ]
  
  data:any;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public http:HttpProvider,public navParams: NavParams) {
  this.http.fetchData('./assets/singer.json',(data) => {
      console.log(data);
      this.data = data.list;
    })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LunboPage');
    //this.slides.startAutoplay();
  }

  addSinger(){
     let modal = this.modalCtrl.create('AddSingerPage');
     modal.onDidDismiss(review => {
      if(review){
        this.data.push(review);
        //this.reviewService.createReview(review);        
      }
    });
 
    modal.present();
  }

  go(){
    this.navCtrl.push('AnimatePage')
  }
}
