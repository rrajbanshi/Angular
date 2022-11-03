import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  //contacts!: Array<Contact>;
  contacts: any = [];

  constructor(
    private _contactService: ContactsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //this.contacts = this._contactService.getContacts();
   this._contactService.getContacts().subscribe((data)=>{
    this.contacts = data;
   })
  }
  id!: number;
  dataSend(data: Contact) {
    this.id = data.id;
    this._router.navigate(['contacts', this.id]);
  }
}
