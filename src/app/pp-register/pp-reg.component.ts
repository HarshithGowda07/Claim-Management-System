import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlansService } from 'src/app/plans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pp-reg',
  templateUrl: './pp-reg.component.html',
  styleUrls: ['./pp-reg.component.css']
})
export class PpRegComponent implements OnInit {
  constructor(
    public objservice:PlansService,
    private router: Router,) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    {form.form.reset();}
    else{
      this.objservice.ppData={PId:0,PName:'',PAmount:0,PSTime:'',PETime:'',MrefId:0};
      // Start:new Date("2001-11-11"),End:new Date("2001-11-11")
    }
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objservice.ppData);
    if(this.objservice.ppData.PId==0){
      this.insertRecord(form);}
    else{

      this.updateRecord(form);
    }

  }




  insertRecord(form:NgForm)
    {
      this.objservice.postPlan().subscribe(res=>
        {
          this.resetForm(form);
          this.objservice.getPlanList();
          alert('Plan Registration Success!!!');
        },
        err=>{
          console.log(err);

          alert('Error!!!'+err);})
    }
  updateRecord(form:NgForm)
    {

      this.objservice.putPlan().subscribe(res=>
      {
        this.resetForm();
        this.objservice.getPlanList();
        alert('Plan record Updated!!!');
      },
      err=>{alert('Error!!!'+err);}
      )
    }
    navigate(): void{
      this.router.navigate(['/delete'])
    }
}


