import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-mainscreen',
  imports: [Button, CommonModule],
  templateUrl: './mainscreen.component.html',
  styleUrl: './mainscreen.component.css'
})
export class MainscreenComponent {

  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['/gameroute', 1]);
  }
}
