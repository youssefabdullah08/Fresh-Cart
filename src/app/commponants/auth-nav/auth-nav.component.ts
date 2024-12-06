import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.css']
})
export class AuthNavComponent {
  isDarkTheme: boolean = false;

constructor() {
  const savedTheme = localStorage.getItem('theme');
  this.isDarkTheme = savedTheme === 'dark';
  document.body.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
  
}
toggleTheme() {
  this.isDarkTheme = !this.isDarkTheme;
  document.body.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
  localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
}
}
