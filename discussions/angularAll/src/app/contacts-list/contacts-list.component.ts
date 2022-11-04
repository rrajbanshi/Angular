import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, switchMap, interval } from 'rxjs';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  //without observable
  //contacts: any = [];

  constructor(
    private _contactService: ContactsService,
    private _router: Router
  ) {
    if (this.searchStr.length == 0) {
      this.contacts$ = this._contactService.getContacts();
    }
  }

  // with observable
  //contacts$: Observable<Array<Contact>> = this._contactService.getContacts();

  contacts$!: Observable<Array<Contact>>;
  searchStr: string = '';
  ngOnInit(): void {
    //***without observable**/
  }
  id!: number;
  dataSend(data: Contact) {
    this.id = data.id;
    this._router.navigate(['contacts', this.id]);
  }

  search(event: Event) {
    this.searchStr = (event.target as HTMLInputElement).value;
    if (this.searchStr.length == 0) {
      this.contacts$ = this._contactService.getContacts();
    } else {
      this.contacts$ = this._contactService.search(this.searchStr);
    }
  }
}
