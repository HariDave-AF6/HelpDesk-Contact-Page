import { Component, Input, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

export interface Person {
  id: number;
  name: string;
  email: string;
  phone: string;
  organization: string;
  project: string;
  lastSeen: string;
  avatar?: string;
}

export interface Organization {
  id: number;
  name: string;
  phone: string;
  project: string;
  email: string;
  lastSeen: string;
}

@Component({
  selector: 'app-contacts',
  imports: [MatIcon, MatButton, MatTableModule, MatFormFieldModule, MatInputModule,
    MatTab, MatTabGroup],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})

export class Contacts {
  displayedColumns: string[] = ['name', 'phone', 'project', 'organization', 'lastSeen', 'actions'];
  dataSource = new MatTableDataSource<Person | Organization>();
  personCount = 15;
  organizationsCount = 3;
  selectedTab: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() selectedProject: string = 'all';

  // Static contact data
  persons: Person[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 234 567 8900',
      organization: '',
      project: 'Hotel Royal',
      lastSeen: '2 days ago'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma.wilson@email.com',
      phone: '+1 234 567 8901',
      organization: 'Design Studio',
      project: 'Cafe Corner',
      lastSeen: '1 week ago'
    },
    {
      id: 3,
      name: 'Robert Chen',
      email: 'robert.chen@email.com',
      phone: '+1 234 567 8902',
      organization: '',
      project: 'Tech Support',
      lastSeen: '1 day ago'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 234 567 8903',
      organization: '',
      project: 'Hotel Royal',
      lastSeen: '3 days ago'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      phone: '+1 234 567 8904',
      organization: '',
      project: 'Hotel Royal',
      lastSeen: '2 weeks ago'
    },
    {
      id: 6,
      name: 'Lisa Davis',
      email: 'lisa.davis@email.com',
      phone: '+1 234 567 8905',
      organization: '',
      project: 'Cafe Corner',
      lastSeen: '4 hours ago'
    },
    {
      id: 7,
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '+1 234 567 8906',
      organization: '',
      project: 'Tech Support',
      lastSeen: '1 day ago'
    },
    {
      id: 8,
      name: 'Anna Martinez',
      email: 'anna.martinez@email.com',
      phone: '+1 234 567 8907',
      organization: 'Health Services',
      project: 'Tech Support',
      lastSeen: '1 month ago'
    },
    {
      id: 9,
      name: 'David Thompson',
      email: 'david.thompson@email.com',
      phone: '+1 234 567 8908',
      organization: '',
      project: 'Hotel Royal',
      lastSeen: '2 days ago'
    },
    {
      id: 10,
      name: 'Jennifer Lee',
      email: 'jennifer.lee@email.com',
      phone: '+1 234 567 8909',
      organization: '',
      project: 'Cafe Corner',
      lastSeen: '5 days ago'
    },
    {
      id: 11,
      name: 'Kevin Anderson',
      email: 'kevin.anderson@email.com',
      phone: '+1 234 567 8910',
      organization: '',
      project: 'Hotel Royal',
      lastSeen: '3 weeks ago'
    },
    {
      id: 12,
      name: 'Rachel Green',
      email: 'rachel.green@email.com',
      phone: '+1 234 567 8911',
      organization: '',
      project: 'Cafe Corner',
      lastSeen: '1 hour ago'
    },
    {
      id: 13,
      name: 'Tom Harris',
      email: 'tom.harris@email.com',
      phone: '+1 234 567 8912',
      organization: '',
      project: 'Hotel Royal',
      lastSeen: '1 week ago'
    },
    {
      id: 14,
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 234 567 8913',
      organization: 'Travel Agency',
      project: 'Tech Support',
      lastSeen: '2 months ago'
    },
    {
      id: 15,
      name: 'Chris Taylor',
      email: 'chris.taylor@email.com',
      phone: '+1 234 567 8914',
      organization: '',
      project: 'Hotel Royal',
      lastSeen: '6 hours ago'
    }
  ];

  organizations: Organization[] = [
    { id: 1, name: 'Design Studio', phone: '+1 555 123 4567', project: 'Hotel Royal',  email: 'studio@email.com', lastSeen: '1 week ago' },
    { id: 2, name: 'Health Services', phone: '+1 555 987 6543', project: 'Cafe Corner',  email: 'health@email.com', lastSeen: '2 weeks ago' },
    { id: 3, name: 'Travel Agency', phone: '+1 555 222 3333', project: 'Tech Support',  email: 'travel@email.com', lastSeen: '3 weeks ago' },
  ];

  ngOnInit() {
    this.dataSource.data = this.persons;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.applyFilterDropDownValue();
  }

  applyFilterDropDownValue() {
    if (this.selectedProject === 'all') {
      this.dataSource.data = this.selectedTab === 0 ? this.persons : this.organizations;
    } else {
      if (this.selectedTab === 0) {
        this.dataSource.data = this.persons.filter(person => person.project === this.selectedProject);
      } else {
        this.dataSource.data = this.organizations.filter(org => org.project === this.selectedProject);
      }
    }
  }

  updateDisplayedColumns() {
    if (this.selectedTab === 0) {
      this.displayedColumns = ['name', 'phone', 'project', 'organization', 'lastSeen', 'actions'];
    } else {
      this.displayedColumns = ['name', 'phone', 'project', 'lastSeen', 'actions'];
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onTabChange(index: number) {
    this.selectedTab = index;
    if (index === 0) {
      this.dataSource.data = this.persons;
    } else {
      this.dataSource.data = this.organizations;
    }

    this.updateDisplayedColumns();
    this.applyFilterDropDownValue();
  }

  selectContact(contact: Person | Organization) {
    console.log('Selected contact:', contact);
  }
}
