import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css'],
})
export class ContactsDetailComponent implements OnInit {
  constructor(
    private _contactService: ContactsService,
    private _route: ActivatedRoute
  ) {
    this.id = this._route.snapshot.params['id'];
    this.contact = <Contact>this._contactService.getContact(this.id);
  }

  contact!: Contact;
  id!: string;

  ngOnInit(): void {}

  
}
