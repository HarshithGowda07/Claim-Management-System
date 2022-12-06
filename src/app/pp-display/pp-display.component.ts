import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/plan.service';

@Component({
  selector: 'app-pp-display',
  templateUrl: './pp-display.component.html',
  styleUrls: ['./pp-display.component.css']
})
export class PpDisplayComponent implements OnInit {

  constructor(public objSrv:PlanService) { }

  ngOnInit(): void {
    this.objSrv.getPlanList();
  }
  del(ppId)
  {
    if(confirm('Are you Sure You Want to delete this Claim?'))
    {
    this.objSrv.delPlan(ppId).subscribe(res=> {this.objSrv.getPlanList();alert("Claim Deleted!!!");},
    err=>{alert('Error!!!'+err);});
    }
  }

}
