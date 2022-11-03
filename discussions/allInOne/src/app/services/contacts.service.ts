import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contact!: Contact;

  constructor() {}
}
