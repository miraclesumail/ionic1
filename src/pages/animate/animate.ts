import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger ,state,transition,animate,style, keyframes} from "@angular/animations";

/**
 * Generated class for the AnimatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animate',
  templateUrl: 'animate.html',
  animations:[
    trigger('fading',[
         state('visable',style({
            opacity: 1
         })),
         state('invisable', style({
           opacity: 0
         })),
         transition('* => *',animate('.5s'))
      ]),
      trigger('moving', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(350%, 0, 0)'
      })),
      transition('in => out', animate('1200ms ease-in')),
      transition('out => in', animate('1200ms ease-out'))
    ]),
    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,90px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ])
  ]
})
export class AnimatePage {
  visableState = 'visable';
  moveState = 'in';
  bounceState = 'noBounce';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimatePage');
  }

  fadeIt(){
      this.visableState = (this.visableState == 'visable')?'invisable':'visable';
   }

   moveIt(){
      this.moveState = (this.moveState == 'in')?'out':'in';
   }

   toggleBounce(){
    this.bounceState = (this.bounceState == 'noBounce') ? 'bouncing' : 'noBounce';  
  }

  go(){
    this.navCtrl.push('PlayersPage')
  }
}
