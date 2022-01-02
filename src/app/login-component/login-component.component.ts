import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router) {}

  form = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.email, Validators.required],
      },
    ],
    password: ['', [Validators.minLength(8), Validators.required]],
  });

  ngOnInit(): void {
    const jsonData = localStorage.getItem('auth')
      ? localStorage.getItem('auth')
      : null;
    const authDetails = jsonData ? JSON.parse(jsonData) : '';
    if (authDetails.email && authDetails.password) {
      this.route.navigate(['/', 'home']);
    } else {
      this.route.navigate(['/']);
    }
  }



  formValue(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      localStorage.setItem('auth', JSON.stringify(this.form.value));
      this.route.navigate(['/', 'home']);
    }
  }
}
