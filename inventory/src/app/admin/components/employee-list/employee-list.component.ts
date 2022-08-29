import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: any;
  constructor(private employeeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.employeeData();
  }

  employeeData() {
    this.employeeService.getEmployee().subscribe((res: any) => {
      console.log(res);
      this.employee = res;

    });
  }
  delete(id:any) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      console.log(res);
      this.employeeData();
    });
  }

  add(item:any) {
    console.log("hello");
    console.log(item.id);
    
    this.router.navigate(['/employee/employee-detail'], { queryParams: { id:  item.id } });

  }

}
