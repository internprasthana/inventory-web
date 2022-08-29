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

}
