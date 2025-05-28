import { Injectable, signal } from '@angular/core';
import { javascriptGenerator } from 'blockly/javascript';
import * as Blockly from 'blockly/core';
//@ts-ignore
import Interpreter from 'js-interpreter';
@Injectable({
  providedIn: 'root',
})
export class BlocklyService {
  image = signal<string>('JuniorAnimatedNormal.gif');
  level: number = 1;
  stamina: number = 100;
  focus: number = 100;
  time: number = 0;
  private myInterpreter: Interpreter | null = null;
  constructor() {}
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
  gameOver() {
    console.log('Game Over');
    this.resetGame();
  }
  changeImg(img: string) {
    this.image.set(img);
  }
  getImg(): string {
    return this.image();
  }

  changeStamina(amount: number) {
    this.stamina += amount;
    if (this.stamina < 0) {
      this.stamina = 0;
      this.gameOver();
    } else if (this.stamina > 100) {
      this.stamina = 100;
    }
    console.log('Stamina changed:', this.stamina);
    if (this.getImg() === 'JuniorAnimatedCoffee.gif') {
      setTimeout(() => {
        if (this.stamina < 20) {
          this.changeImg('JuniorAnimatedTired.gif');
        } else {
          this.changeImg('JuniorAnimatedNormal.gif');
        }
      }, 1000);
    } else {
      if (this.stamina < 20) {
        this.changeImg('JuniorAnimatedTired.gif');
      } else {
        this.changeImg('JuniorAnimatedNormal.gif');
      }
    }
  }

  getStamina(): number {
    console.log('Current stamina:', this.stamina);
    return this.stamina;
  }

  getContentByLevel(level: number): contents[] {
    const contents: contents[] = [];
    if (level > 0) {
      contents.push({
        kind: 'block',
        type: 'dev_task',
      });
    }
    if (level > 1) {
      contents.push({
        kind: 'block',
        type: 'controls_repeat',
      });
    }
    if (level > 2) {
      contents.push({
        kind: 'block',
        type: 'dev_coffee',
      });
    }
    if (level > 3) {
      contents.push({
        kind: 'block',
        type: 'controls_if',
      });
    }
    if ((level = 4)) {
      contents.push({
        kind: 'block',
        type: 'dev_stamina_check',
      });
    }

    return contents;
  }

  runCode() {
    const code = javascriptGenerator.workspaceToCode(
      Blockly.getMainWorkspace()
    );
    console.log('Running code:', code);
    const initApi = (interpreter: Interpreter, globalObject: any) => {};
    eval(code);
  }
}

export interface contents {
  kind: string;
  type: string;
}

function tomarCafe(blocklyService: BlocklyService) {
  blocklyService.changeImg('JuniorAnimatedCoffee.gif');
  console.log('Tomando café...');
  const staminaRecovery = 20;
  blocklyService.changeStamina(staminaRecovery);
}
function fazerTask(task: number, blocklyService: BlocklyService) {
  console.log(`Fazendo task: ${task}`);
  const staminaCost = 10;
  blocklyService.changeStamina(-staminaCost);
}

function sleep(milliseconds: number) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
