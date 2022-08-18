import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css']
})
export class AddDevicesComponent implements OnInit {
  addDevicesForm:any; // formgroup name

  constructor(private fb:FormBuilder) { 
    this.addDevicesForm = this.fb.group({
      name: ['', Validators.required],
      assignedTo: ['', Validators.required],
      deviceType: ['', [Validators.required]],
      os: ['', Validators.required],
      serviceTag: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  get f(){
    return this.addDevicesForm.controls;
  }

  submit(){

  }

  cancel(){

  }

}
