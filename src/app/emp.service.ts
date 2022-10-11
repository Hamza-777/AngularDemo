import { Injectable } from '@angular/core';
import { Employee } from './Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
employee:Employee;
employeeList:Employee[];

  constructor() { 
    this.employee = {eid: 0, ename: '', salary: 0, doj: new Date('2/2/2022'), d: { did: 1, dname: '' }};
    this.employeeList = [
      {eid: 0, ename: 'One', salary: 354354, doj: new Date('2/2/2022'), d: { did: 1, dname: 'DeptOne' }},
      {eid: 1, ename: 'Two', salary: 3544, doj: new Date('2/2/2022'), d: { did: 1, dname: 'DeptOne' }}
    ];
  }

  GetEmployees():any {
    return this.employeeList;
  }
}
