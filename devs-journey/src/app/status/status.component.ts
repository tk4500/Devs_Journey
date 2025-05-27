import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { runCode } from '../blockly/blockly.constructor';

@Component({
  selector: 'app-status',
  imports: [Button],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  devimg: string = 'JuniorAnimatedCoffee.gif';
  loading: boolean = false;
  run() {
    runCode();
  }
}
