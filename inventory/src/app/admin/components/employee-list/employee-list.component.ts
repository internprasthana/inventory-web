import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private employee: AdminServiceService, private route: Router) {}
  data: any;
  device: any;
  ngOnInit(): void {
    this.getemployeeData();
  }
  getemployeeData() {
    this.employee.getemployee().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
  delete(id: any) {
    this.employee.deleteemployee(id).subscribe((res) => {
      console.log(res);
      this.getemployeeData();
    });
  }
  getdevices(){
    this.employee.fetchdevices().subscribe(res=>{
      this.device=res;
    })
  }

 
}
