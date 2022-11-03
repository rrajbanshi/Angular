import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../model/contact.model';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css'],
})
export class ContactsDetailComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() back = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  backFunction() {
    this.back.emit();
  }

  editFunction() {
    this.edit.emit(this.contact);
  }
}
