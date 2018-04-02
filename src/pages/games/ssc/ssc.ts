import { Component } from '@angular/core';
import { ItemSliding } from 'ionic-angular';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { Effect } from '../../../providers/effect'
import { GameConfigProvider } from '../../../providers/game-config/game-config'
import { ShareProvider } from '../../../providers/share/share'
import { Storage } from '@ionic/storage';

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
  segment:string = "all";  
  showList:any;
  queryText:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage, 
  public share:ShareProvider,public gameConfig: GameConfigProvider,public alertCtrl: AlertController,) {
    super();  
    console.log(this.navParams.get('nav'))
    this.say()
    gameConfig.fetchMethedsList()
    this.showList = share.mockData;
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

  updateData(){
      console.log('ddddd')
      this.showList = this.share.mockData.filter(item => RegExp(this.queryText).test(item.name))
  }

  updateList(){
      if(this.segment == 'favorite')
         this.showList = this.share.mockData.filter(item => item.favorite == true)
      else
         this.showList = this.share.mockData   
  }

  addFavorite(slidingItem: ItemSliding, sessionData: any) {
      let temp;
      this.storage.get('data').then(val => {
          console.log(sessionData)
           val = val.map(item => {
               if(item.name == sessionData.name){
                   console.log('ddd')
                   return {...item,favorite:true}
               }else{
                   return item
               }
               //item == sessionData ? {...item,favorite:true}:item
           })
           console.log(val)
           this.storage.set('data',val).then(() => {
               let alert = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                text: 'OK',
                handler: () => {
                    // close the sliding item
                    slidingItem.close();
                    this.share.getLatest().then(()=> this.updateList())
                   
                }
                }]
      });
           alert.present();

           })
      })   
  }

  removeFavorite(slidingItem: ItemSliding, sessionData: any,title) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.storage.get('data').then(val => {
          console.log(sessionData)
           val = val.map(item => {
               if(item.name == sessionData.name){
                   console.log('ddd')
                   return {...item,favorite:false}
               }else{
                   return item
               }
               //item == sessionData ? {...item,favorite:true}:item
           })
           console.log(val)
               this.storage.set('data',val).then(() => {
               slidingItem.close()
               this.share.getLatest().then(()=> this.updateList())
              
           

           })
            
            })
            // close the sliding item and hide the option buttons
            
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  }

}
