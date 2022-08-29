import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  searchcontrol!: FormControl;
  employee=[] as any[];
  tempData=[] as any[];
  filteredresult$!: Observable<string[]>;
  searchKey="";

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeData();
  }

  employeeData() {
    this.employeeService.getEmployee().subscribe((res: any) => {
      console.log(res);
      this.employee = res;
      this.tempData=this.employee;

    })
  }

  devices() {

  }

  filterData()
  {
    this.tempData=this.employee.filter((ele)=>{
      if(ele.name.indexOf(this.searchKey)!=-1)
      return ele;
    });
  }

}
