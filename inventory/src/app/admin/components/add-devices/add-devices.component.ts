import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css']
})
export class AddDevicesComponent implements OnInit {
  addDevicesForm:any; // formgroup name

  constructor(private fb:FormBuilder,private router:ActivatedRoute) { 
    this.addDevicesForm = this.fb.group({
      name: ['', Validators.required],
      assignedTo: ['', Validators.required],
      deviceType: ['', [Validators.required]],
      os: ['', Validators.required],
      serviceTag: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params);
  }

  get f(){
    return this.addDevicesForm.controls;
  }

  submit(){

  }

  cancel(){

  }

}
