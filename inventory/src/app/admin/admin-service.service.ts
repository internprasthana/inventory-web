import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient ) {}
  getemployee(){
    return this.http.get(environment.base+'/employees')
  }
  deleteemployee(id:any){
    return this.http.delete(environment.base+'/employees'+'/'+id);
  }
  fetchdevices(){
    return this.http.get(environment.base+'/devices');
  }
  
  deletedevice(id:any){
   
    return this.http.delete(environment.base+'/devices'+'/'+id)
  }
  getcurrentdata(id:any){
    return this.http.get(environment.base+'/employees'+'/'+id)
  }
  updateemployee(id:any,data:any){
    return this.http.put(environment.base+'/employees'+'/'+id,data)
  }
  getcurrentdevices(id:any){
    return this.http.get(environment.base+'/devices'+'/'+id)
  }
  updateDevice(id:any,data:any){
    return this.http.put(environment.base+'/devices'+'/'+id,data)
  }
  
}
