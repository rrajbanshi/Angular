import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css'],
})
export class ContactsDetailViewComponent implements OnInit {
  contact!: Contact;
  edit!: Contact;
  back!: string;

  dataInService!: Contact;
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.contact = {
      id: 3,
      name: 'rakesh',
      phone: 9853573382,
    };
  }

  navigateToEditor(contact: Contact) {
    this.edit = contact;
    this._router.navigate(['/contacts', contact.id, 'edit']);
  }
  navigateToList(back: string) {
    this._router.navigate(['/']);
  }
  ngOnInit(): void {
    this.dataInService = {
      id: this._route.snapshot.params['id'],
      name: this._route.snapshot.params['name'],
      phone: this._route.snapshot.params['phone'],
    };
    this._route.params.subscribe((data) => {
      this.dataInService = {
        id: data['id'],
        name: data['name'],
        phone: data['phone'],
      };
    });
  }
}
