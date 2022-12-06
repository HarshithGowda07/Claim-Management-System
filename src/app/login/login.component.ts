import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public objservice:CrudService,
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[''],
      password: ['']
    });
  }

  submit(): void{
    this.http.get<any>("http://localhost:41643/api/members")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.form.value.username && a.Password ===this.form.value.password;
      });
      if(user){
        alert("Login Success");
        this.form.reset();
        this.router.navigate(['/display'])
      }
      else{
        alert("Login Unsuccessfull");
      }},err=>{
        alert("Something went Wrong!!!")
    })
  }
  //navigate(): void{
    //this.router.navigate(['/display'])
  //}

}
