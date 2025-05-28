import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { BlocklyService } from '../blockly/blockly.service';


@Component({
  selector: 'app-status',
  imports: [Button],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  devimg: string = 'JuniorAnimatedCoffee.gif';
  loading: boolean = false;

    constructor(private blocklyservice: BlocklyService) {}
  run() {
    this.blocklyservice.runCode();
  }
}
