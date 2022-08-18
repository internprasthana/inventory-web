import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private route: Router,
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
  login() {
    if (!this.loginForm.valid) {
      // this.form="required";
      this.loginForm.markAllAsTouched();
    } else {
      console.log(this.loginForm.value);
      // this.services.create(this.loginForm.value);
      this.route.navigate(['/admin/adminhome'])
    }
  }
}