import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddSingerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-singer',
  templateUrl: 'add-singer.html',
})
export class AddSingerPage {
  name: any;
  song:string;
  songs:Array<string> = [];

  //aa = new Map<number,HTMLIonLoadingElement>()

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSingerPage');
  }

  save(): void {
 
    let review = {
      name: this.name,
      songs:this.songs
    };
 
    this.viewCtrl.dismiss(review);
 
  }

  addSong(){
    this.songs.push(this.song);
    this.song = '';
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}
