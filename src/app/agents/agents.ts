import { NgClass } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  project: string;
  active: boolean;
  lastSeen: string;
}

@Component({
  selector: 'app-agents',
  imports: [NgClass, MatIcon, MatButton, MatTableModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatPaginator, MatSortModule],
  templateUrl: './agents.html',
  styleUrl: './agents.scss',
})

export class Agents {
  displayedColumns: string[] = ['name', 'phone', 'project', 'department', 'lastSeen', 'actions'];
  dataSource = new MatTableDataSource<Agent>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() selectedProject: string = 'all';
  selectedTab: number = 0;

  agents: Agent[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+1 1234567890',
      department: 'Sales',
      project: 'Hotel Royal',
      active: true,
      lastSeen: '1 hour ago',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '+1 2345678901',
      department: 'Support',
      project: 'Cafe Corner',
      active: false,
      lastSeen: '2 days ago',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      phone: '+1 5551234567',
      department: 'Engineering',
      project: 'Tech Support',
      active: true,
      lastSeen: '3 hours ago',
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      phone: '+1 3456789012',
      department: 'Engineering',
      project: 'Hotel Royal',
      active: true,
      lastSeen: 'Just now',
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      email: 'ethan.hunt@example.com',
      phone: '+1 4567890123',
      department: 'Field Ops',
      project: 'Cafe Corner',
      active: false,
      lastSeen: '5 days ago',
    },
    {
      id: 6,
      name: 'Fiona Gallagher',
      email: 'fiona.gallagher@example.com',
      phone: '+1 5678901234',
      department: 'Customer Service',
      project: 'Tech Support',
      active: true,
      lastSeen: '2 hours ago',
    },
    {
      id: 7,
      name: 'George Clooney',
      email: 'george.clooney@example.com',
      phone: '+1 6789012345',
      department: 'Engineering',
      project: 'Project Gamma',
      active: false,
      lastSeen: '1 week ago',
    },
    {
      id: 8,
      name: 'Hannah Montana',
      email: 'hannah.montana@example.com',
      phone: '+1 7890123456',
      department: 'Sales',
      project: 'Hotel Royal',
      active: true,
      lastSeen: '30 minutes ago',
    },
    {
      id: 9,
      name: 'Isaac Newton',
      email: 'isaac.newton@example.com',
      phone: '+1 8901234567',
      department: 'Research',
      project: 'Project Delta',
      active: true,
      lastSeen: '4 hours ago',
    },
    {
      id: 10,
      name: 'Julia Roberts',
      email: 'julia.roberts@example.com',
      phone: '+1 9012345678',
      department: 'Support',
      project: 'Cafe Corner',
      active: false,
      lastSeen: '3 days ago',
    },
    {
      id: 11,
      name: 'Kevin Hart',
      email: 'kevin.hart@example.com',
      phone: '+1 1123456789',
      department: 'Sales',
      project: 'Project Gamma',
      active: true,
      lastSeen: '45 minutes ago',
    },
    {
      id: 12,
      name: 'Laura Palmer',
      email: 'laura.palmer@example.com',
      phone: '+1 2234567890',
      department: 'Engineering',
      project: 'Tech Support',
      active: false,
      lastSeen: '2 weeks ago',
    },
    {
      id: 13,
      name: 'Michael Scott',
      email: 'michael.scott@example.com',
      phone: '+1 3345678901',
      department: 'Management',
      project: 'Hotel Royal',
      active: true,
      lastSeen: 'Today',
    },
    {
      id: 14,
      name: 'Nancy Drew',
      email: 'nancy.drew@example.com',
      phone: '+1 4456789012',
      department: 'Investigation',
      project: 'Project Delta',
      active: true,
      lastSeen: '10 minutes ago',
    },
    {
      id: 15,
      name: 'Oscar Wilde',
      email: 'oscar.wilde@example.com',
      phone: '+1 5567890123',
      department: 'Editorial',
      project: 'Project Gamma',
      active: false,
      lastSeen: '1 month ago',
    },
  ];

  ngOnInit() {
    this.applyFilterValues();
    this.updateDisplayedColumns();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.applyFilterValues();
  }

  onTabChange(index: number) {
    this.selectedTab = index; // 0 = Active, 1 = Inactive
    this.applyFilterValues();
    this.updateDisplayedColumns();
  }

  applyFilterValues() {
    let filtered = this.agents;

    // Filter by active/inactive
    filtered = filtered.filter(agent => agent.active === (this.selectedTab === 0));

    // Filter by project
    if (this.selectedProject !== 'all') {
      filtered = filtered.filter(agent => agent.project === this.selectedProject);
    }

    this.dataSource.data = filtered;
  }

  updateDisplayedColumns() {
    if (this.selectedTab === 0) {
      this.displayedColumns = ['name', 'phone', 'project', 'department', 'actions'];
    } else {
      this.displayedColumns = ['name', 'phone', 'project', 'department', 'lastSeen', 'actions'];
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
