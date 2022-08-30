import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-assign-devices',
  templateUrl: './assign-devices.component.html',
  styleUrls: ['./assign-devices.component.css']
})
export class AssignDevicesComponent implements OnInit {

  employeeData: any;
  getUpdatedData: any;
  devicesList: any;
  devicesEmployee: any;
  
  constructor(private devices: DevicesService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getEmployees();
    this.devices.get(this.activeRouter.snapshot.params['id']).subscribe((lists: any) => {
      this.employeeData = lists;
      console.log(this.employeeData);

    })
  }


  getEmployees() {
    this.devices.getEmployee().subscribe((data: any) => {
      this.devicesEmployee = data
    })
  }

  getData() {
    this.devices.getDevices().subscribe((res: any) => {
      this.devicesList = res
    })
  }

  edit(devices: any) {

    devices.employee_id = this.employeeData.id
    console.log(devices);
    console.log(devices.employee);
    this.devices.updateDevices(devices.id, devices).subscribe((rest: any) => {
      this.getUpdatedData = rest
      console.log(this.getUpdatedData);
      this.router.navigate(['/admin/employee-list'])
    })
  }
}
