import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "../http/http";
import {ShareProvider} from "../share/share";

@Injectable()
export class HomeServiceProvider {

postRecordServer(){
    this.parameter= this.getParameters(1);
    let chargeRecord = await this.client.post('/mobileh5-reports/0/getmobileusertransaction/', this.parameter);
    this.share.chargeRecord.data = chargeRecord.data.data;
  }
}