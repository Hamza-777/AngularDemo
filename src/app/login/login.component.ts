import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstnumber:number;
  msg: string;

  constructor() {
    this.firstnumber = 10;
    this.msg = "";
   }

  ngOnInit(): void {
  }

  // Validate():void {
  //   this.msg = "Your number is: " + this.firstnumber;
  // }

  Validate(num:string, num2:string):void {
    this.msg = "Your number is: " + num + " " + num2;
  }

}
