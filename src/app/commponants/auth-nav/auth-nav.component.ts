import { Component } from '@angular/core';
import { ThemeService } from 'src/app/serveses/theme.service';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.css']
})
export class AuthNavComponent {
  isDarkTheme: boolean = false;

  constructor(private _themeService: ThemeService) {
    this._themeService.theme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });
  }

  toggleTheme() {
    this._themeService.toggleTheme();
  }
}
