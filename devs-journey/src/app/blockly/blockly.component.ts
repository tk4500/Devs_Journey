import {Component, OnInit} from '@angular/core';
import * as BlocklyConstructor from './blockly.constructor';
import * as Blockly from 'blockly';
import {BlocklyOptions} from 'blockly';

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  standalone: true,
  styleUrls: ['./blockly.component.css'],
})
export class BlocklyComponent implements OnInit {

  constructor() {}


  ngOnInit() {
    BlocklyConstructor.defineBlocks();
    const blocklyDiv = document.getElementById('blocklyDiv');
    const toolbox = {
      kind: 'flyoutToolbox',
      contents: [
        {
          kind: 'block',
          type: 'dev_task',
        },
        {
          kind: 'block',
          type: 'dev_coffe',
        },
      ],
    };
 if (blocklyDiv) {
    Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: 'media/',
      trashcan: false,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
      toolbox,
    } as BlocklyOptions);
  }
}
}
