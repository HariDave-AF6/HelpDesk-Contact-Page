import { Routes } from '@angular/router';
import { Contacts } from './contacts/contacts';
import { Projects } from './projects/projects';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: Contacts },
  { path: 'projects', component: Projects },
];
