import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http'
import { ShareProvider} from '../share/share'
/*
  Generated class for the GameConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameConfigProvider {
  data: any = {};
  set:any;

  clock: {
    'total': any,
    'days': any,
    'hours': any,
    'minutes': any,
    'seconds': any
  } = {
    'total': '',
    'days': '',
    'hours': '',
    'minutes': '',
    'seconds': ''
  }
  istimeout: boolean = false;
  //上期中奖号码 期号d
  defaultData: any = {data: {lottery_balls: '', last_number:''}};

  methedsList: any = {};

  constructor(public http:HttpProvider, public share:ShareProvider) {
    console.log('Hello GameConfigProvider Provider');
  }

  //根据此方法决定球的内容
  setdefaultsMethodData() {
    let df = this.businessTool.setDefaultsMethod(this.methedsList.game_ways, this.defaultData.data && this.defaultData.data.default_method_id, this.defaultData);
    if (df) {
      this.defaultsMethodData = df;
    }
  }

  /**
   * 1.获取总玩玩法列表
   */
  fetchMethedsList() {
    this.http.fetchData('./assets/game-method.json', (res) => this.methedsList = res.list)
    console.log('总玩玩法列表:'+JSON.stringify(this.methedsList));
    
    //this.setdefaultsMethodData();
  
  }

  /**
   * 2.获取默认数据
   */
  getDefaultsMethods(){
     this.http.fetchData('./assets/game-info.json', (res) => this.defaultData = res.list)
     let str = this.defaultData.data.lottery_balls;

     if (str) {
      if (/[,\s]+/.test(str)) {
        this.defaultData.data.lottery_balls = this.defaultData.data.lottery_balls.split(/[,\s]+/);
      } else {
        this.defaultData.data.lottery_balls = this.defaultData.data.lottery_balls.split('');
      }
    }

      this.coundown(this.defaultData.data.current_time, this.defaultData.data.current_number_time)

  }

  //开奖倒计时
  coundown(startime: string, endtime: string) {
    let a = new Date(startime.replace(/-/g, '/')).getTime();
    let b = new Date(endtime.replace(/-/g, '/')).getTime();
    let c = b - a;
    clearInterval(this.set);
    this.istimeout = false;
    if (c > 1000) {
      this.set = setInterval(() => {
        c -= 1000;
        this.istimeout = c > 1000;
        this.clock = this.getTimeRemaining(c);
        if (!this.istimeout) {
          this.coundownAgain();
        }
      }, 1000);
    } 
  }

  coundownAgain() {
    clearInterval(this.set);
    //this.getIssues();
    this.getDefaultsMethods();
  }

  //转化为小事分
  getTimeRemaining(t) {
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'days': days,
      'hours': ('0' + hours).slice(-2),
      'minutes': ('0' + minutes).slice(-2),
      'seconds': ('0' + seconds).slice(-2)
    };
  }
}
