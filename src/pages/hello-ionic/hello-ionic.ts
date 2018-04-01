import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import {HttpClient} from "@angular/common/http";

import { Eg1Page } from '../eg1/eg1'; 

@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild('slides') slides: Slides;

  constructor(private http:HttpClient, public navCtrl: NavController) {
    //http://jsonplaceholder.typicode.com/photos
      this.http.get('/v2/movie/in_theaters')
    .subscribe((res: any) => {
      //this.listData = res.json();
        console.log(res)
    });
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  say(){
    console.log('say')
  }

  go(){
    this.navCtrl.push(Eg1Page)
  }
}
  