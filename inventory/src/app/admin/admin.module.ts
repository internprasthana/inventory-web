import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing module
import { AdminRoutingModule } from './admin-routing.module';
// components
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddDevicesComponent } from './components/add-devices/add-devices.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { SidebarnavComponent } from './components/sidebarnav/sidebarnav.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    AddDevicesComponent,
    DevicesListComponent,
    EmployeeListComponent,
    AdminhomeComponent,
    SidebarnavComponent
  ],
  imports: [
    CommonModule,
    // routing module
    AdminRoutingModule
  ]
})
export class AdminModule { }
