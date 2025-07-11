import { Routes } from '@angular/router';
import { Contacts } from './contacts/contacts';
import { Projects } from './projects/projects';
import { Profile } from './profile/profile';
import { Agents } from './agents/agents';
import { Department } from './department/department';
import { ProjectSettings } from './project-settings/project-settings';

export const routes: Routes = [
  // lazy loading after that

  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: Contacts },
  { path: 'projects', component: Projects },
  { path: 'project-settings', component: ProjectSettings },
  { path: 'profile', component: Profile },
  { path: 'departments', component: Department },
  { path: 'agents',  component: Agents },
];
