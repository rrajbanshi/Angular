import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { CONTACT_DATA } from '../data/contact-data';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-app',
  templateUrl: './contacts-app.component.html',
  styleUrls: ['./contacts-app.component.css'],
})
export class ContactsAppComponent implements OnInit {
  contact: Contact;

  allData = CONTACT_DATA;

  // contacts!: Array<Contact>;
  contacts: any = [];
  constructor(private _contactService: ContactsService) {
    this.contact = {
      id: 6,
      name: 'Diana Ellis',
      email: '',
      phone: '',
      birthday: '',
      website: '',
      image:
        'https://cdn.pixabay.com/photo/2022/09/18/14/23/baby-7463137_960_720.jpg',
      address: {
        street: '6554 park lane',
        zip: '43378',
        city: 'Rush',
        country: 'United States',
      },
    };
  }

  ngOnInit(): void {
    this.contacts = this._contactService.getContacts();
    console.log(this.contacts);
  }
}
