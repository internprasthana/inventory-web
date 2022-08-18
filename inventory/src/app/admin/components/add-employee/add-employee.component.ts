import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm: any; // formgroup name
  constructor(private fb: FormBuilder) {

    this.addEmployeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      designation: ['', [Validators.required]],
      phonenumber: ['', Validators.required],
      empId: ['', Validators.required],
      role: ['', Validators.required],
      devices: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  get f() {
    return this.addEmployeeForm.controls;
  }

  submit() {

  }

  cancel() {

  }

}

