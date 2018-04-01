import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlertController, LoadingController, ToastController} from "ionic-angular";

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

  constructor(private toastCtrl: ToastController, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {}


}
