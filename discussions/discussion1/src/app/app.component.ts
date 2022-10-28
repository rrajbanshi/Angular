import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discussion1';

  reactiveForm !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName : new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      gender : new FormControl('male')

    })
  }
  onFormSubmit(){
    console.log(this.reactiveForm)
  }
}
