import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {
  searchcontrol!: FormControl
 devicesList=[] as any;
 tempData=[] as any[];
 filteredresult$!: Observable<string[]>;
 searchKey="";

 
  constructor(private _deviceservices:DevicesService) { }

  ngOnInit(): void {
    this.getData() ;
  }

  getData() {
    this._deviceservices.getDevices().subscribe((res: any) => {
      console.log(res);
      this.devicesList = res;
      this.tempData=this.devicesList;
    })
  }
  delete(id: any) {
    console.log();
    this.deviceservices.deletedevice(id).subscribe((res) => {
      console.log(res);
      this.getData();
    });
  }

  assign(){
    
  }
  filterData()
  {
    this.tempData =this.devicesList.filter((ele:any)=>{
      if(ele.name.indexOf(this.searchKey)!=-1)
      return ele;
    });
  }

}
