import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employee:EmployeeService,private router:Router) { }
  data:any;
  ngOnInit(): void {
    this.user();
  }
  user(){
   this.employee.getemployee().subscribe(res=>{
    console.log(res)
    this.data=res;
   })

  }

}
