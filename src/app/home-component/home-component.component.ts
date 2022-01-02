import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html'
})
export class HomeComponentComponent {

  isLoading = false;

  constructor(private router: Router) {}


  onLogOut(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
    localStorage.removeItem('auth');
  }

}
