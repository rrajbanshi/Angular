import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAppComponent } from './contacts-app.component';

describe('ContactsAppComponent', () => {
  let component: ContactsAppComponent;
  let fixture: ComponentFixture<ContactsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
