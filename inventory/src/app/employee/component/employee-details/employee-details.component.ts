import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    console.log(this.route.queryParams)
    this.route.queryParams
      .subscribe((params) => {
        console.log('Params');
        console.log(params);
           
        if(params['id']){
     
          this.http.get(environment.base_url + '/employees/'+params['id']).subscribe((res: any) => {
            this.data = res;
          })
        }
        
      });
  }

}
