import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  addEmployeeForm: any; // formgroup name
  constructor(private fb: FormBuilder,private employeId:AdminServiceService,private router:ActivatedRoute,private route:Router) {
    
    this.addEmployeeForm = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      phone_number:new FormControl(''),
      designation:new FormControl(''),
     


    })
  }
 
  list:any;

  ngOnInit(): void {
   
    this.employeId.getcurrentdata(this.router.snapshot.params['id']).subscribe((res)=>{
      this.list=res;
      console.log(res)
      this.addEmployeeForm = new FormGroup({
        name:new FormControl(this.list.name),
        email:new FormControl(this.list.email),
        phone_number:new FormControl(this.list.phone_number),
        designation:new FormControl(this.list.designation),
       
      })
      this.getemployeedata();
     
    })
    
  }
  updateemployee(){
    alert('You want to make changes');
    this.employeId.updateemployee(this.router.snapshot.params['id'],this.addEmployeeForm.value).subscribe(results=>{
      this.route.navigateByUrl('/employee-list')
       
    })
    
    this.getemployeedata();
   
  }
  getemployeedata(){
    this.employeId.getemployee().subscribe(res=>{
    });

  }
  get f() {
    return this.addEmployeeForm.controls;
  }
  submit() {

  }

  cancel() {
    this.route.navigateByUrl("/employee-list")
  }
  


}
