import { Injectable } from '@angular/core';
import { employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empDate: employee;
  
  constructor() { }
}
