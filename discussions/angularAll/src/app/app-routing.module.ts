import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsAppComponent } from './contacts-app/contacts-app.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [
  { path: 'contactapp', component: ContactsAppComponent },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent },
  { path: 'contacts/edit/:id', component: ContactsEditorComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
