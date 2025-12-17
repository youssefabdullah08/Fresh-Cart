import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themeSubject = new BehaviorSubject<string>('light');
    theme$ = this.themeSubject.asObservable();

    constructor() {
        this.initTheme();
    }

    private initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            this.setTheme('light');
        }
    }

    toggleTheme() {
        const currentTheme = this.themeSubject.value;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    private setTheme(theme: string) {
        this.themeSubject.next(theme);
        localStorage.setItem('theme', theme);
        document.body.setAttribute('data-theme', theme);
    }

    getCurrentTheme(): string {
        return this.themeSubject.value;
    }
}
