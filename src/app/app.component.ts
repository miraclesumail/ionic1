import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { Subject } from 'rxjs/Subject';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('mytoast') myToast:any;

  // make HelloIonicPage the root (or first) page
  //rootPage = 'LoginPage';
  rootPage = 'TabsPage';
  pages: Array<{title: string, component: Component, active:boolean}>;
  activePage = new Subject();


  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage,active:true },
      { title: 'My First List', component: ListPage, active:false }
    ];   
    this.activePage.subscribe((selected:any) => {
      this.pages.map(page => {
        page.active = page.title === selected.title;
      });
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.activePage.next(page)
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component).then(()=> console.log(this.nav.getActive().name)
    );
  }
}
