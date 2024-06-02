import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../Services/user-login.service';
import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userObj:any ={
    'Name' : '',
    'Email' : '',
    'Password' : ''
  }
  isVisible:boolean = false;
  Message_Alert = false;
  Message = "";

  constructor(private userSrv: UserLoginService ,private  router: Router) {
  }
  ngOnInit(): void {
  }

  signUpUser(){
    debugger

    this.userSrv.addUserApi(this.userObj).subscribe((res: any) => {
    })
    this.router.navigateByUrl('/HomePage');
    console.log(this.userObj)
    //alert("User has been added")

  }

  loginUser(){
    debugger
    let Email = this.userObj.Email
    let Password = this.userObj.Password
    console.log(Email,Password)
    this.userSrv.GetUserApi(Email,Password).subscribe((res: any) => {
      debugger;
      if(res != null && res.responseStatus == HttpStatusCode.Ok){
        this.Message = res.responseMessage;
        this.Message_Alert = true;
        this.router.navigateByUrl('/HomePage');
      }
      else{
        this.Message = res.responseMessage;
        this.Message_Alert = true;
        this.isVisible = true;
      }
    })
  }

}
