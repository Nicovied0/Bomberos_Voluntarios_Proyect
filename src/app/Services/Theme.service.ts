import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('claro');
  public theme$ = this.themeSubject.asObservable();

  private lightTheme = {
    backgroundColor: 'white',
    textColor: 'black'
  };

  private darkTheme = {
    backgroundColor: 'black',
    textColor: 'white'
  };

  private currentTheme = this.lightTheme;

  toggleTheme() {
    const currentTheme = this.themeSubject.getValue();
    const newTheme = currentTheme === 'claro' ? 'oscuro' : 'claro';
    this.themeSubject.next(newTheme);
    console.log(newTheme)

  }

  getTheme(): any {
    return this.currentTheme;
  }

  setTheme(theme: string): void {
    this.currentTheme = theme === 'claro' ? this.lightTheme : this.darkTheme;
  }
}
