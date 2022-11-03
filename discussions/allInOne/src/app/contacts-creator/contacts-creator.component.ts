import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css'],
})
export class ContactsCreatorComponent implements OnInit {
  contactForm!: FormGroup;

  addContactFunc() {
    this._router.navigate(['/contact', 'new']);
  }

  onFormSubmit() {
    this._http
      .post<any>('http://localhost:3000/contacts', this.contactForm.value)
      .subscribe(
        (res) => {
          alert('contact add success !!!');
          this.contactForm.reset();
          this._router.navigate(['contact']);
        },
        (err) => {
          alert('something wrong');
        }
      );
  }
  constructor(
    private _router: Router,
    private _http: HttpClient,
    private formsBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formsBuilder.group({
      id: [0],
      name: [''],
      email: [''],
      phone: [''],
      birthday: [''],
      website: [''],
      address: [''],
    });
  }
}
