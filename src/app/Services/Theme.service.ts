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


    console.log(newTheme)
  }
}

//
