import { Component, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';
import { ThemeService } from '../services/theme-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatToolbar, FormsModule, MatIconModule, MatBadgeModule, MatInputModule, MatSelectModule, MatOptionModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})

export class Navbar {
  searchQuery: string = '';
  notificationCount: number = 3;
  chatCount: number = 2;
  selectedProject: string = 'all';
  isMobile: boolean = false;
  selectedTheme: string = 'theme-default';
  themeSub!: Subscription;
  label: string = 'Select Project';

  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleRightSidebar = new EventEmitter<void>();
  @Output() projectChanged = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {
    this.checkScreen();
  }

  ngOnInit() {
    this.themeSub = this.themeService.themeName.subscribe(theme => {
      this.selectedTheme = theme;
    });
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth <= 959.98;

    this.label = this.isMobile ? 'Project' : 'Select Project';
  }

  onProjectChange() {
    this.projectChanged.emit(this.selectedProject);
  }

  onMenuClick() {
    this.toggleSidebar.emit();
  }

  onChatClick() {
    this.toggleRightSidebar.emit();
  }
}