import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';

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

  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() projectChanged = new EventEmitter<string>();

  onProjectChange() {
    this.projectChanged.emit(this.selectedProject);
  }

  onMenuClick() {
    this.toggleSidebar.emit();
  }
}
