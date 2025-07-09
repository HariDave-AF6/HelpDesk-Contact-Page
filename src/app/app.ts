import { Component, HostListener, ViewChild } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Navbar } from './navbar/navbar';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { ChatSidebar } from './chat-sidebar/chat-sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Navbar, MatDrawerContainer, MatDrawer, MatDrawerContent, ChatSidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'contacts';
  selectedProject: string = 'all';
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('rightDrawer') rightDrawer!: MatDrawer;
  isMobile: boolean = false;
  mode: 'side' | 'over' = 'side';

  onProjectChanged(project: string) {
    this.selectedProject = project;
  }

  ngAfterViewInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 959.98;

    if (this.isMobile) {
      this.drawer?.close();
      this.mode = 'over';
    } else {
      this.drawer?.open();
      this.mode = 'side';
    }
  }
}