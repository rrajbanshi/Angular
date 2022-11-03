import { Injectable } from '@angular/core';
import { CONTACT_DATA } from '../data/contact-data';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  // dummyData: Contact = {
  //   id: 0,
  //   name: '',
  //   email: '',
  //   phone: '',
  //   birthday: '',
  //   website: '',
  //   image: '',
  //   address: {
  //     street: '',
  //     zip: '',
  //     city: '',
  //     country: '',
  //   },
  // };
  allContacts!: Contact[];

  //static data
  getContacts() {
    return CONTACT_DATA;
  }

  getContactss() {
    this._http.get<any>('http://localhost:3000/contacts').subscribe((res) => {
      this.allContacts = res;
    });
    return this.allContacts;
  }

  // static data
  getContact(id: string) {
    return this.getContacts().find((contact) => String(contact.id) == id);
  }

  // getContact(id: string) {
  //   return this.allContacts.find((contact) => String(contact.id) === id);
  // }

  constructor(private _http: HttpClient) {}
}
