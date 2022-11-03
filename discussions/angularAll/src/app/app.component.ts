import { Component } from '@angular/core';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularAll';
  user: any;
  constructor(private _service: ContactsService) {
    // this._service.getContacts().subscribe((data) => {
    //   console.log(data);
    //   this.user = data;
    // });
  }
}
