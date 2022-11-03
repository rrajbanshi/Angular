import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'allInOne';
  //data coming from child--> name, gender
  name !: string;
  gender !: string;

  //sending details to child
  details = {
    name: 'rakesh',
    designation: 'engineer',
  };

  //get the details from child
  parentFunc(dataOut: { name: string; gender: string }) {
    this.name = dataOut.name;
    this.gender = dataOut.gender;
  }
}
