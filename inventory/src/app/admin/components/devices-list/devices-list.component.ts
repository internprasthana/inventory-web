import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],
})
export class DevicesListComponent implements OnInit {
  data: any;
  constructor(private devices: AdminServiceService,private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.getdevices();
  }
  getdevices() {
    this.devices.fetchdevices().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
  delete(id: any) {
    console.log();
    this.devices.deletedevice(id).subscribe((res) => {
      console.log(res);
      this.getdevices();
    });
  }
  onClick(items: any) {
    this.devices.getcurrentdata(this.router.snapshot.params['items']).subscribe(res=>{
      console.log(res);
    })
    
  }
}
