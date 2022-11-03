import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactAppComponent } from './contact-app/contact-app.component';

const routes: Routes = [
  { path: 'details', component: ContactsDetailComponent },
  { path: 'contacts', component: ContactsDetailViewComponent },
  { path: 'contacts/:id/:name', component: ContactsDetailViewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UsersComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'contact', component: ContactsCreatorComponent },
  { path: 'contact/:id', component: ContactsCreatorComponent },
  { path: 'contactapp', component: ContactAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
