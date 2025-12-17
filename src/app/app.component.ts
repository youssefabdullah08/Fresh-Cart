import { Component } from '@angular/core';
import { ThemeService } from './serveses/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-comeres';
  spinnerBdColor = 'rgba(255, 255, 255, 1)';
  spinnerColor = '#0f172a';

  constructor(private _themeService: ThemeService) {
    this._themeService.theme$.subscribe(theme => {
      if (theme === 'dark') {
        this.spinnerBdColor = 'rgba(15, 23, 42, 1)'; // Slate-900
        this.spinnerColor = '#ffffff';
      } else {
        this.spinnerBdColor = 'rgba(255, 255, 255, 1)'; // White
        this.spinnerColor = '#0f172a'; // Slate-900
      }
    });
  }
}
