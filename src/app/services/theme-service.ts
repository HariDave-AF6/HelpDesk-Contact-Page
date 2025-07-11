import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ThemeName = 'theme-default' | 'theme-green' | 'theme-dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeName$ = new BehaviorSubject<ThemeName>('theme-default');

  get themeName() {
    return this.themeName$.asObservable();
  }

  setTheme(themeName: ThemeName) {
    const body = document.body;
    body.classList.remove('theme-default', 'theme-green', 'theme-dark');
    body.classList.add(themeName);
    this.themeName$.next(themeName);
  }
}