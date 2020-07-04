import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/serves/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public dataservice: EmployeeService,
              private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    this.reset();
  }

  reset(form? : NgForm){
    if(form != null){
      form.resetForm();
    }
    this.dataservice.empDate = {
      id: null, 
      fullName: '',
      empCode: '',
      position: '',
      mobile: ''
    }
  }

  onClick(form: NgForm){
    let userData = form.value;
    this.firestore.collection('employees').add(userData);
    form.reset();
    window.alert('registered succefully');
  }

}
