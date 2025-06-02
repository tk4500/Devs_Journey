import { Component, computed, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { BlocklyService } from '../blockly/blockly.service';
import { CommonModule } from '@angular/common';
import { javascriptGenerator } from 'blockly/javascript';
import * as Blockly from 'blockly/core';
import { ToastModule } from 'primeng/toast';
import { InterpreterService } from '../blockly/interpreter.service';

@Component({
  selector: 'app-status',
  imports: [Button, CommonModule, ProgressBar, ToastModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
    imagem = computed(()=> this.blocklyservice.image());
    public blocklyservice = inject(BlocklyService);
    constructor(private interpreter: InterpreterService) {

    }


  run() {
    const code = javascriptGenerator.workspaceToCode(
      Blockly.getMainWorkspace()
    );
    this.interpreter.init(code);
    this.interpreter.run();
  }
  pause() {
    this.interpreter.pause();
  }

  step() {
    this.interpreter.step();
  }

  reset() {
    this.interpreter.reset();
  }
}
