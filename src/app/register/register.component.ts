import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee:Employee;

  constructor(private empservice: EmpService, private router: Router) { 
    this.employee = {eid: 0, ename: '', salary: 0, doj: new Date('2/2/2022'), d: { did: 1, dname: '' }};
  }

  ngOnInit(): void {
  }

  AddEmp():void {
    this.empservice.AddEmployee(this.employee);
    this.router.navigate(["elist"]);
  }

}
