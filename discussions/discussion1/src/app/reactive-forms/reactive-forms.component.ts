
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
   
  reactiveForm : FormGroup;
  formSubmitted : boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password : new FormControl(null, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")])
    })
  }
  onFormSubmit(){
    console.log(this.reactiveForm.value)
    this.formSubmitted = true
  }

  populateData(){
    this.reactiveForm.setValue({
      email:'rakesh@gmail.com',
      password : 'ZXyz@12334'
    })
  }

  clearData(){
    this.reactiveForm.setValue({
      email: '',
      password : ''
    })
  }

  validate(){
    if(this.reactiveForm.valid){
      alert("form is validated")
    }else{
      alert("form is not validated")
    }
  }

}
