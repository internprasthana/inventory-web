import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http :HttpClient) { }
    getdata(){
      return this.http.get("https://dummy.restapiexample.com/api/v1/employees")
    }
    getEmployeeList(){
      return this.http.get(environment.base+'/employees')
    }
    
}
