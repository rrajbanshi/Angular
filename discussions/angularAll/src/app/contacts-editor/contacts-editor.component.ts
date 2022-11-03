import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
 contact !: Contact;
 urlObj !:{id:string, edit : string};
  constructor(private _contactService : ContactsService, private _route : ActivatedRoute) { 
    this._contactService.getContact(this.urlObj.id).subscribe((data)=>{
      this.contact = data;
    })
  }


  ngOnInit(): void {
    this.urlObj = {
      id: this._route.snapshot.params['id'],
      edit : this._route.snapshot.params['edit']
    }
  }

}
