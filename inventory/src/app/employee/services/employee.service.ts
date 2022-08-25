import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getemployee(){
    return this.http.get(environment.base+'/employees')
  }
  
  fetchdevices(){
    return this.http.get(environment.base+'/devices');
  }
}
