import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {
  devicesList:any;
  constructor(private deviceservices:DevicesService) { }

  ngOnInit(): void {
    this.getData() ;
  }

  getData() {
    this.deviceservices.getDevices().subscribe((res: any) => {
      console.log(res);
      this.devicesList = res
    })
  }

  assign(){
    
  }

}
