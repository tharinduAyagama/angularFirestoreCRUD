import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/serves/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public data;
  constructor(private dataservice: EmployeeService) {
    this.data = this.dataservice.empDate;}

  ngOnInit(): void {
  }

}
