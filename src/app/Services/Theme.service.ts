import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('claro');
  public theme$ = this.themeSubject.asObservable();

  toggleTheme() {
    const currentTheme = this.themeSubject.getValue();
    const newTheme = currentTheme === 'claro' ? 'oscuro' : 'claro';
    this.themeSubject.next(newTheme);
    this.updateRootStyles(newTheme);
  }

  public updateRootStyles(theme: string): void {
    const root = document.documentElement;
    root.style.setProperty('--background-color', theme === 'claro' ? 'white' : 'black');
    root.style.setProperty('--text-color', theme === 'claro' ? 'black' : 'white');
  }
}
