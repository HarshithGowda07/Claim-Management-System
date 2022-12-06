import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/plan.service';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-pp-show',
  templateUrl: './pp-show.component.html',
  styleUrls: ['./pp-show.component.css']
})
export class PpShowComponent implements OnInit {


  constructor(public objSrv:PlansService) { }

  ngOnInit(): void {
    this.objSrv.getPlanList();
  }
  //you are not calling services
  fillForm(selectedPP)
  {
    this.objSrv.ppData=Object.assign({},selectedPP);
  }

}
