import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }
  getDevices() {
    return this.http.get(environment.base_url + '/devices');

  }

  addDevices(elements: any) {
    return this.http.post(environment.base_url + '/devices', elements)
  }
  deletedevice(id:any){
   
    return this.http.delete(environment.base_url+'/devices'+'/'+id)
  }
  
  updateDevice(id:any,data:any){
    return this.http.put(environment.base_url+'/devices'+'/'+id,data)
  }
  getcurrentdevices(id:any){
    return this.http.get(environment.base_url+'/devices'+'/'+id)
  }
}
