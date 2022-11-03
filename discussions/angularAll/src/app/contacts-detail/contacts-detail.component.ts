import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css'],
})
export class ContactsDetailComponent implements OnInit {
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
  // editContact() {
  //   console.log('hello');
  //   console.log(this.id);
  //   this._router.navigate(['contacts', this.id, 'edit']);
  // }
}
