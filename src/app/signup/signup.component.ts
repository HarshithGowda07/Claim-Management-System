import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public objservice:CrudService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    {form.form.reset();}
    else{
      this.objservice.mdata={MId:0,MName:'',Username:'',Password:'',Address:'',State:'',Country:'',Email:'',Phone:'',DOB:new Date("2000-10-10")};
    }
  }
  onSubmit(form:NgForm){
    if(this.objservice.mdata.MId==0){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm){
    this.objservice.postMember().subscribe(res=>{
      this.resetForm(form);

      this.objservice.getMemberList();
      alert('Record is Inserted');
    },
      err=>{alert('Error!!!'+err);})
  }

  updateRecord(form:NgForm){
    this.objservice.putMember().subscribe(res=>{
      this.resetForm(form);

      this.objservice.getMemberList();
      alert('Record is Updated');
    },
      err=>{alert('Error!!!'+err);})
  }
}
