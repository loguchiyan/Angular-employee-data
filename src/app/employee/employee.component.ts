import { employeeservice } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
selector: 'app-employee',
templateUrl: './employee.component.html',
styleUrls: ['./employee.component.css']

})
export class EmployeeComponent implements OnInit {


headers:any[]=[];
rows:any[]=[];


constructor(public service:employeeservice) { }

ngOnInit(): void {

this.headers=this.service.headers
this.rows=this.service.rows

}

}