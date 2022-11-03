import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCreatorComponent } from './contacts-creator.component';

describe('ContactsCreatorComponent', () => {
  let component: ContactsCreatorComponent;
  let fixture: ComponentFixture<ContactsCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
