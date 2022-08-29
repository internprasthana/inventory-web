import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-edit-devices',
  templateUrl: './edit-devices.component.html',
  styleUrls: ['./edit-devices.component.css']
})
export class EditDevicesComponent implements OnInit {
  addDeviceForm: any; // formgroup name
  failuremsg:boolean=false;
  constructor(private devices:DevicesService,private router:ActivatedRoute,private route:Router) { 
    this.addDeviceForm = new FormGroup({
      name:new FormControl(''),
      device_type:new FormControl(''),
      service_tag:new FormControl(''),
      os:new FormControl(''),
      employee_id:new FormControl(''),


    })
  }
  list:any;
  ngOnInit(): void {
    
    this.devices.getcurrentdevices(this.router.snapshot.params['id']).subscribe(res=>{
      this.list=res;
      this.addDeviceForm = new FormGroup({
        name:new FormControl(this.list?.name),
        device_type:new FormControl(this.list.device_type),
        service_tag:new FormControl(this.list.service_tag),
        os:new FormControl(this.list.os),
        employee_id:new FormControl(this.list?.employee?.id),
      
      })
      this.getdevices();
    })
   
    
  }
  updateDevice(){
    alert('You want to make changes');
    this.devices.updateDevice(this.router.snapshot.params['id'],this.addDeviceForm.value).subscribe(results=>{
      console.log("hello",this.addDeviceForm.value)
      this.route.navigateByUrl('/devices-list')
    },(error)=>{
      console.log('response is not valid');
      this.failuremsg=true;
    })
    
  }
  getdevices(){
    this.devices.getDevices().subscribe(results=>{

    })
  }
  
  cancel() {
    alert('You want to Cancel')
    this.route.navigateByUrl('/devices-list')
  }
 
  


}
