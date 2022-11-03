import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() data!: { name: string; designation: string };
  @Output() dataOut: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.dataOut.emit({ name: 'gaana', gender: 'male' });
  }

  sendData() {
    let data = {
      name: 'rakesh',
      gender: 'male',
    };
    this.dataOut.emit(data);
  }
}
