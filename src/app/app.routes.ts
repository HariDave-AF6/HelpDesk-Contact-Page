import { Routes } from '@angular/router';
import { Contacts } from './contacts/contacts';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: Contacts },
];
