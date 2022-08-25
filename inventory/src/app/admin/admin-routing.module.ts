import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevicesComponent } from './components/add-devices/add-devices.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { EditDevicesComponent } from './components/edit-devices/edit-devices.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  {
    path:'add-devices',
    component:AddDevicesComponent
  },
  {
    path:'add-employee',
    component:AddEmployeeComponent
  },
  {
    path:'devices-list',
    component:DevicesListComponent
  },
  {
    path:'employee-list',
    component:EmployeeListComponent
  },
  {
    path:'adminhome',
    component:AdminhomeComponent
    
  },
  {
    path: 'edit-employee/:id',
    component: EditEmployeesComponent,
  },
  {
    path: 'devices-edit/:id',
    component: EditDevicesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
