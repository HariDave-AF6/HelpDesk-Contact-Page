import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Navbar } from './navbar/navbar';
import { Contacts } from './contacts/contacts';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Navbar, Contacts, MatDrawerContainer, MatDrawer, MatDrawerContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'contacts';

  selectedProject: string = 'all';

  onProjectChanged(project: string) {
    this.selectedProject = project;
  }
}
