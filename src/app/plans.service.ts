import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plans } from './plans.model';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  ppData:Plans=new Plans();
  readonly ppApiUrl='http://localhost:41643/api/plans';
  ppList:Plans[];

  constructor(private objcHttp:HttpClient) {  }

  putPlan()
  {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.PId,this.ppData);
  }
  postPlan()
  {
    console.log(this.ppData);

    return this.objcHttp.post(this.ppApiUrl,this.ppData);
  }
  getPlanList()
  {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList=res as Plans[]);

}
}
