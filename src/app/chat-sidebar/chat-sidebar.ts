import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-sidebar',
  imports: [MatIcon, NgClass],
  templateUrl: './chat-sidebar.html',
  styleUrl: './chat-sidebar.scss'
})

export class ChatSidebar {
  @Input() rightDrawer!: MatDrawer;

  Chats = [
    { name: 'Anonymous User #1234', project: 'Hotel Royal', duration: '00:05:30', status: 'waiting' },
    { name: 'John Smith', project: 'Cafe Corner', duration: '00:12:45', status: 'active' },
    { name: 'Jane Doe', project: 'Tech Support', duration: '00:02:15', status: 'active' },
    { name: 'Guest #5678', project: 'Hotel Royal', duration: '00:03:50', status: 'waiting' },
    { name: 'Michael Scott', project: 'Office Branch', duration: '00:09:10', status: 'active' },
    { name: 'Dwight Schrute', project: 'Office Branch', duration: '00:04:22', status: 'waiting' },
    { name: 'Pam Beesly', project: 'Reception', duration: '00:07:05', status: 'active' },
  ];

  directMessages = [
    { name: 'Sarah Miller', initials: 'SM', message: 'Can you help withthe KB article the KB article?', online: true, time: '2m' },
    { name: 'Mike Johnson', initials: 'MJ', message: 'New ticket assigned to you', online: false, time: '5m' },
    { name: 'Rachel Green', initials: 'RG', message: 'Client call rescheduled.', online: true, time: '7m' },
    { name: 'Ross Geller', initials: 'RG', message: 'Document shared for review.', online: false, time: '12m' },
    { name: 'Monica Geller', initials: 'MG', message: 'Meeting notes uploaded.', online: true, time: '15m' },
    { name: 'Chandler Bing', initials: 'CB', message: 'Project status updated.', online: false, time: '20m' },
    { name: 'Joey Tribbiani', initials: 'JT', message: 'Pizza order confirmed.', online: true, time: '30m' },
  ];

  groups = [
    { name: 'Hotel Support Team', message: 'New chat assigned to queue', time: '1m', count: 3 },
    { name: 'Technical Support', message: 'Escalated ticket discussion', time: '30m', count: 7 },
    { name: 'Sales Team', message: 'Weekly sales target updated', time: '5m', count: 2 },
    { name: 'HR Department', message: 'New policy review', time: '10m', count: 4 },
    { name: 'IT Helpdesk', message: 'System maintenance planned', time: '15m', count: 1 },
    { name: 'Management', message: 'Quarterly meeting prep', time: '20m', count: 5 },
    { name: 'Developers', message: 'Code review session', time: '25m', count: 2 },
  ];
  
  constructor(private router: Router) {}

  goToAll(type: string) {
    if (type === 'chats') {
      this.router.navigate(['/chats']);
    } else if (type === 'direct') {
      this.router.navigate(['/direct-messages']);
    } else if (type === 'groups') {
      this.router.navigate(['/groups']);
    }
  }

  get topActiveChats() {
    return this.Chats.slice(0, 3);
  }

  get topDirectMessages() {
    return this.directMessages.slice(0, 3);
  }

  get topGroups() {
    return this.groups.slice(0, 3);
  }

  openChat(chat: any) {
    this.router.navigate(['/chats', chat.name]);
  }

  openDirectMessage(dm: any) {
    this.router.navigate(['/direct-messages', dm.name]);
  }

  openGroup(group: any) {
    this.router.navigate(['/groups', group.name]);
  }

  closeDrawer() {
    if (this.rightDrawer) {
      this.rightDrawer.close();
    }
  }
}
