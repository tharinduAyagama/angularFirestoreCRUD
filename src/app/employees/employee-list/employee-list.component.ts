import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/serves/employee.service';
import { Employee } from 'src/app/serves/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList = [];

  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe(array => {
      this.employeeList = array.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Employee
        }
      });
    });
  }

  empUpdate(list: Employee){
    this.service.empDate = Object.assign({} , list);
  }

}
