import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlertController, LoadingController, ToastController} from "ionic-angular";
import { Storage } from '@ionic/storage';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareProvider {
  //大玩法 id
  pid: string;
  basketData = [];
  mockData:Array<{name:string, favorite:boolean,times:number}>;

  constructor(private toastCtrl: ToastController,public storage:Storage, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
    this.getLatest()
  }

  getLatest():Promise<any>{
    return this.storage.get('data').then(val => {
         if(!val){
           this.mockData = [
             {name:"playing dota",favorite:true,times:7},
             {name:"playing axiba",favorite:false,times:8},
             {name:"playing mlgb",favorite:false,times:9},
             {name:"playing yamade",favorite:false,times:10}
           ]
           this.storage.set('data',this.mockData)
         }else{
           this.mockData = val
         }
      })
  }

  
}
