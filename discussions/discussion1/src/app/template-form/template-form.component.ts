import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {
    this.user = {
      email: '',
      password: '',
    };
  }

  user: User;
  pressedLogIn: boolean = false;

  populate() {
    this.user = {
      email: 'rakesh@gmail.com',
      password: 'XRHD!3jdf',
    };
  }

  clear() {
    this.pressedLogIn = false;
    this.user = {
      email: '',
      password: '',
    };
  }

  login(userLogIn: NgForm) {
    console.log(userLogIn.form.value);
    this.pressedLogIn = true;
  }
  ngOnInit(): void {}
}
