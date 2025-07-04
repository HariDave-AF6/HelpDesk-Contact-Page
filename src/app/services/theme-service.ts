import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  setTheme(themeName: 'theme-default' | 'theme-green') {
    const body = document.body;
    body.classList.remove('theme-default', 'theme-green');
    body.classList.add(themeName);
  }
}
