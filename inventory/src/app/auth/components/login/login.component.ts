import { Component, getNgModuleById, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NodeWithI18n } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  
  data: any;
  error: any;
  errorMessage: any;
  loading: boolean = false;
  FailureMsg: boolean = false;
  Username: any;

  constructor(private route: Router, private http: HttpClient,
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }
  get f() {
    return this.loginForm.controls;
  }
  password() {
    this.route.navigate(['/auth/forgotpassword'])
  }
  public inputType: string = 'password';
  showpassword(event: any) {
    if (event.target.checked) {
      this.inputType = 'text';
    }
    else {
      this.inputType = 'password';
    }
  }


  login(username: any, password: any) {
    this.loading = false;
    console.log(username, password)
   
    this.loginForm.reset();
    this.http.get(environment.base_url + '/auth/login/?email=' + username + '&' + 'password=' + password).subscribe((res: any) => {
      
      localStorage.setItem('loginData',JSON.stringify({isLoggedIn:true, loginTime: Date.now(), ...res}))
      this.determineNavigation(res);
    }, (error) => {                              //Error callback
      console.error('invalid user')
      this.errorMessage = error;
      this.FailureMsg = true;

      
    })
  }

  determineNavigation(empData: any) {
    if (empData) {
      var empDataObj = empData;
      if (empDataObj.user_roles && empDataObj.user_roles.length > 0) {
        var roles = empDataObj.user_roles;
        var isAdmin = false;
        for (var i = 0; i < roles.length; i++) {
          if (roles[i].roles) {
            if (roles[i].roles.toLowerCase() == 'Admin'.toLowerCase()) {
              isAdmin = true;
              break;
            }

          }
        }
        if (isAdmin) {
          this.route.navigate(['/admin/adminhome'], { queryParams: {id:empDataObj.id} });
       
        } else {
          this.route.navigate(['/employee/employee-detail'], { queryParams: {id:empDataObj.id} });
        }
      } else {
        
        console.log("No Roles Found");
      }
    }
    else {
      
      console.log('No user found');
    }
  }
}