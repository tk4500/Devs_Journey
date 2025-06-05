import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-mainscreen',
  imports: [Button, CommonModule],
  templateUrl: './mainscreen.component.html',
  styleUrl: './mainscreen.component.css'
})
export class MainscreenComponent {

  startGame(){
    window.location.href = `/gameroute/1`;
  }
}
