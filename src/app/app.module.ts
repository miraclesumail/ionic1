import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { LunboPage } from '../pages/lunbo/lunbo';
import { ComponentsModule } from '../components/components.module';
import { Eg1Page } from '../pages/eg1/eg1'; 
import { Eg2Page } from '../pages/eg2/eg2'; 
import { Eg3Page } from '../pages/eg3/eg3'; 

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { ShareProvider } from '../providers/share/share';
import { GameConfigProvider } from '../providers/game-config/game-config';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    LunboPage, 
    Eg1Page ,
    Eg2Page,
    Eg3Page,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule, 
    HttpClientModule,ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    LunboPage, 
    ItemDetailsPage,
    ListPage,Eg1Page,Eg2Page,Eg3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    ShareProvider,
    GameConfigProvider
  ]
})
export class AppModule {}
