import { Routes } from '@angular/router';
import { Contacts } from './contacts/contacts';
import { Projects } from './projects/projects';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: Contacts },
  { path: 'projects', component: Projects },
  { path: 'profile', component: Profile },
];
