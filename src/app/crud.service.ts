import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  readonly ApiUrl='http://localhost:41643/api/members';
  mlist:Member[];
  mdata:Member=new Member();
  constructor(private obj:HttpClient) { }
  getMemberList(){
    this.obj.get(this.ApiUrl).toPromise().then(res=>this.mlist=res as Member[]);
   }
  putMember(){
    return this.obj.put(this.ApiUrl+"/"+this.mdata.MId,this.mdata);
  }
  postMember(){
    console.log(this.mdata);
    return this.obj.post(this.ApiUrl,this.mdata);
  }
  loginMember(mid){
    this.obj.get(this.ApiUrl+"/"+mid).toPromise().then(res=>this.mlist=res as Member[]);
  }
}
