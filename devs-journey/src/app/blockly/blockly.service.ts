import { Injectable } from '@angular/core';
import { javascriptGenerator } from 'blockly/javascript';
import * as Blockly from 'blockly/core';
@Injectable({
  providedIn: 'root'
})
export class BlocklyService {

  level: number = 1;
  stamina: number = 100;
  focus: number = 100;
  time: number = 0;
  constructor() { }
  resetGame() {
    this.level = 1;
    this.stamina = 100;
    this.focus = 100;
    this.time = 0;
  }
  updateLevel(level: number) {
    console.log('Updating level to:', level);
    this.level = level;
  }

  getStamina(): number {
    console.log('Current stamina:', this.stamina);
    return this.stamina;
  }

  getContentByLevel(level: number): contents[] {
    const contents: contents[] = [];
    if(level > 0){
      contents.push({
        kind: 'block',
        type: 'dev_task'
      });
    }
    if(level > 1){
      contents.push({
        kind: 'block',
        type: 'controls_repeat'
      });
    }
    if(level > 2){
      contents.push({
        kind: 'block',
        type: 'dev_coffe'
      });
    }
    if(level > 3){
      contents.push({
        kind: 'block',
        type: 'controls_if'
      });
    }
    if(level = 4){
      contents.push({
        kind: 'block',
        type: 'dev_stamina_check'
      });
    }

    return contents;
  }


  runCode() {
  const code = javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
  eval(code);
  }
}

export interface contents{
  kind: string;
  type: string;
}

function tomarCafe() {
console.log('Tomando café');
}
function fazerTask(task: number) {
console.log(`Fazendo task ${task}`);
}

