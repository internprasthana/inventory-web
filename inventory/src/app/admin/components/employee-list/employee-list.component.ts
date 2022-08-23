import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeData();
  }

  employeeData() {
    this.employeeService.getEmployee().subscribe((res: any) => {
      console.log(res);
      this.employee = res;

    })
  }

  devices() {

  }

}
