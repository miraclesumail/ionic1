import { Component, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, LoadingController,ToastController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'
import { CustomToastComponent } from '../../components/custom-toast/custom-toast'

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {
  @ViewChild('mytoast') myToast:CustomToastComponent;

  page:number = 1;
  players:any;
  hasmore:boolean = true;
  //color="yellow";

  getColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16); 
  }

  constructor(private cdRef:ChangeDetectorRef, public navCtrl: NavController,private toastCtrl: ToastController,
  public http:HttpProvider,public loading:LoadingController, public navParams: NavParams) {
     this.http.fetchData('./assets/singer.json',
     res => this.players = res,{index:this.page}) 
  }

 ionViewDidEnter(){
         console.log(this.navCtrl.getActive().name);

 }

  loadmore(){
    let loader = this.loading.create();
    loader.present().then(() => 
       this.http.fetchData('./assets/singer.json',
      res => {
       
        this.players = this.players.concat(res);
        loader.dismiss().then(() => {
              if(!res.length){
                //   let toast = this.toastCtrl.create({
                //  message: 'no more data',
                //  duration: 100000,
                //  position: 'middle'
                //  })
                
                // toast.present()
                this.myToast.show()
                this.hasmore = false;
                 return 
              }
             
        })
     },{index:++this.page}))
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
}
