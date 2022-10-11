import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees:Employee[];

  constructor(private empservice: EmpService) { 
    this.employees = [];
  }

  ngOnInit(): void {
    this.employees = this.empservice.GetEmployees();
  }

}
