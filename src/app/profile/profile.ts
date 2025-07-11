import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '../services/theme-service';
import { FormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatLine } from '@angular/material/core';

@Component({
  selector: 'app-profile',
  imports: [MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatChipsModule,
    FormsModule, MatSlideToggle, MatListModule, MatLine
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})

export class Profile {
  activeSetting = 'appearance';
  themeService = inject(ThemeService);

  switchTheme(theme: 'theme-default' | 'theme-green' | 'theme-dark') {
    this.themeService.setTheme(theme);
  }

  profileData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Customer Support',
    role: 'Administrator',
    avatar: null as string | null
  };

  twoFactorOptions = [
    {
      id: 'totp',
      title: 'TOTP Authenticator',
      description: 'Use an authenticator app for 2FA',
      icon: 'security',
      enabled: false
    },
    {
      id: 'passkey',
      title: 'Passkeys',
      description: 'Use biometric authentication',
      icon: 'fingerprint',
      enabled: false
    }
  ];

  onAvatarChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileData.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  getInitials(): string {
    const firstInitial = this.profileData.firstName ? this.profileData.firstName.charAt(0).toUpperCase() : '';
    const lastInitial = this.profileData.lastName ? this.profileData.lastName.charAt(0).toUpperCase() : '';
    return firstInitial + lastInitial;
  }

  saveProfile(): void {
    console.log('Saving profile:', this.profileData);
  }

  updatePassword(): void {
    console.log('Updating password');
  }

  toggle2FA(optionId: string): void {
    const option = this.twoFactorOptions.find(opt => opt.id === optionId);
    if (option) {
      option.enabled = !option.enabled;
      console.log(`${option.title} ${option.enabled ? 'enabled' : 'disabled'}`);
    }
  }

  setActiveSetting(setting: string): void {
    this.activeSetting = setting;
  }
}
