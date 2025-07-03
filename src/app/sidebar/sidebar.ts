import { NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
  badge?: number;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [MatIcon, MatMenu, MatDivider, RouterLink, MatMenuTrigger, NgIf, NgFor],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})

export class Sidebar {
  @Input() selectedProject: string = 'all';

  menuItems: MenuItem[] = [];

  allProjectMenuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'inbox', label: 'Inbox', route: '/inbox', badge: 12 },
    { icon: 'contacts', label: 'Contacts', route: '/contacts', active: true },
    { icon: 'folder', label: 'Projects', route: '/projects' },
    { icon: 'school', label: 'Knowledge Base', route: '/knowledge-base' },
    { icon: 'assessment', label: 'Reporting', route: '/reporting' }
  ];

  projectSpecificMenuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'inbox', label: 'Inbox', route: '/inbox', badge: 12 },
    { icon: 'contacts', label: 'Contacts', route: '/contacts', active: true },
    { icon: 'school', label: 'Knowledge Base', route: '/knowledge-base' },
    { icon: 'assessment', label: 'Reporting', route: '/reporting' },
    { icon: 'apartment', label: 'Departments', route: '/departments' },
    { icon: 'people', label: 'Agents', route: '/agents' },
    { icon: 'settings', label: 'Settings', route: '/settings' }
  ];

  constructor() {
    this.updateMenuItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedProject']) {
      this.updateMenuItems();
    }
  }

  private updateMenuItems() {
    if (this.selectedProject === 'all') {
      this.menuItems = this.allProjectMenuItems;
    } else {
      this.menuItems = this.projectSpecificMenuItems;
    }
  }
}
