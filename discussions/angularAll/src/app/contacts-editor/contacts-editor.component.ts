import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css'],
})
export class ContactsEditorComponent implements OnInit {
  contact!: Contact;
  id!: string;

  constructor(
    private _contactService: ContactsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.id = this._route.snapshot.params['id'];
    this._contactService.getContact(this.id).subscribe((data) => {
      this.contact = data;
    });
  }

  ngOnInit(): void {}

  save(contact: Contact) {
    this._contactService
      .updateContact(contact)
      .subscribe((data) => (this.contact = data));

    this.gotoContact(this.contact);
  }

  cancel() {
    this.gotoContact(this.contact);
  }

  private gotoContact(contact: Contact) {
    this._router.navigate(['contacts', this.contact.id]);
  }
}
