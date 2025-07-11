import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltip } from '@angular/material/tooltip';

interface DepartmentData {
  id: number;
  name: string;
  members: { name: string }[];
  activeChats: number;
}

@Component({
  selector: 'app-department',
  imports: [CommonModule, MatIcon, MatButtonModule, MatPaginatorModule, MatFormFieldModule, MatInputModule ,MatTableModule , MatTooltip],
  templateUrl: './department.html',
  styleUrl: './department.scss'
})

export class Department {
  displayedColumns: string[] = ['name', 'members', 'chats', 'actions'];
  dataSource!: MatTableDataSource<DepartmentData>;

  departments: DepartmentData[] = [
    {
      id: 1,
      name: 'Support',
      members: [
        { name: 'Alice Johnson' },
        { name: 'Bob Smith' },
        { name: 'Carol D\'Costa' },
        { name: 'David Lee' },
        { name: 'Eva Mendes' }
      ],
      activeChats: 3
    },
    {
      id: 2,
      name: 'Sales',
      members: [
        { name: 'Frank Nelson' },
        { name: 'Grace Hopper' },
        { name: 'Henry Ford' }
      ],
      activeChats: 2
    },
    {
      id: 3,
      name: 'Billing',
      members: [
        { name: 'Irene Adler' },
        { name: 'Jack Bauer' },
        { name: 'Kate Winslet' },
        { name: 'Liam Neeson' },
        { name: 'Monica Geller' },
        { name: 'Nina Simone' }
      ],
      activeChats: 5
    },
    {
      id: 4,
      name: 'Technical',
      members: [
        { name: 'Oscar Isaac' },
        { name: 'Paul Walker' },
        { name: 'Quincy Jones' },
        { name: 'Rachel Green' }
      ],
      activeChats: 1
    },
    {
      id: 5,
      name: 'Human Resources',
      members: [
        { name: 'Samantha Fox' },
        { name: 'Tom Cruise' },
        { name: 'Uma Thurman' },
        { name: 'Vin Diesel' },
        { name: 'Wendy Williams' },
        { name: 'Xander Cage' },
        { name: 'Yvonne Strahovski' }
      ],
      activeChats: 0
    }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<DepartmentData>(this.departments);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getInitials(name: string): string {
    const parts = name.trim().split(' ');
    const first = parts[0]?.charAt(0) || '';
    const last = parts.length > 1 ? parts[parts.length - 1]?.charAt(0) : '';
    return (first + last).toUpperCase();
  }

  viewAllAgents(departmentId: number) {
    console.log(`Redirect to agents page of department ${departmentId}`);
  }

  editDepartment(department: Department) {
    console.log('Editing department:', department);
  }

  deleteDepartment(department: Department) {
    console.log('Deleting department:', department);
  }
}
