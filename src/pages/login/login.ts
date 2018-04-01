import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic'
import { LunboPage } from '../lunbo/lunbo'
import { ComponentsModule } from '../../components/components.module';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
   //<CustomToastComponent>document.getElementById('mytoast')
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
        alert("请输入账号");
    } else if (password.value.length == 0) {
        alert("请输入密码");
    } else {
        this.navCtrl.setRoot(LunboPage)
    }
  }
  
}
