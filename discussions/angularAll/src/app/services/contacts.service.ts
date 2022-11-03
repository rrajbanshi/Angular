import { Injectable } from '@angular/core';
import { CONTACT_DATA } from '../data/contact-data';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  allContacts!: Contact[];

  //static data
  // getContacts() {
  //   return CONTACT_DATA;
  // }

  // getContacts() {
  //   return this._http.get<any>('http://localhost:3000/contacts');
  // }

  getContacts(): Observable<Contact[]> {
    return this._http.get<Contact[]>('http://localhost:3000/contacts');
  }

  // static data
  // getContact(id: string) {
  //   return this.getContacts().find((contact) => String(contact.id) == id);
  // }

  getContact(id: string): Observable<Contact> {
    return this._http.get<Contact>(`http://localhost:3000/contacts/${id}`);
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `http://localhost:3000/contacts/${contact.id}`;
    return this._http.put<Contact>(url, contact);
  }
  constructor(private _http: HttpClient) {}
}
