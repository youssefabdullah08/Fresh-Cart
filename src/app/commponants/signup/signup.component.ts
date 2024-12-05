import { AuthapiService } from './../../serveses/authapi.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  register: FormGroup = this.fb.group({});

  constructor(
    private authService: AuthapiService, 
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.register = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^\w{6,}$/)
      ]],
      rePassword: ['', [
        Validators.required,
        Validators.pattern(/^\w{6,}$/)
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/)
      ]]
    });
  }

  handelform(): void {
    if (this.register.valid) {
      this.authService.signup(this.register.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this.toastr.success('Registration successful!');
            this.router.navigate(['/login']);
          }
        },
        error: (error) => {
          this.toastr.error(error.message || 'Registration failed');
          console.error('Signup error:', error);
        }
      });
    } else {
      this.toastr.warning('Please fill all required fields correctly');
    }
  }
}
