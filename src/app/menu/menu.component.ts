import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  authService: any;

  login() {
    this.authService.session = {
      name: 'Christophe',
      email: "adezfe@gmail.com"
    }
  }
}