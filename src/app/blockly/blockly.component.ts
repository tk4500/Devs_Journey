import { BlocklyService } from './blockly.service';
import { Component, inject, OnInit } from '@angular/core';
import * as BlocklyConstructor from './blockly.constructor';
import * as Blockly from 'blockly';
import { BlocklyOptions } from 'blockly';
import { ActivatedRoute } from '@angular/router';
import { javascriptGenerator } from 'blockly/javascript';

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  standalone: true,
  styleUrls: ['./blockly.component.css'],
})
export class BlocklyComponent implements OnInit {
  constructor(private blocklyservice: BlocklyService) {}
  ngOnInit() {
    BlocklyConstructor.defineBlocks();
    const blocklyDiv = document.getElementById('blocklyDiv');
    const toolbox:any = {
      kind: 'flyoutToolbox',
      contents: [],
    };
    toolbox.contents = this.blocklyservice.getContentByLevel(
      this.blocklyservice.level);
    if (blocklyDiv) {
      this.blocklyservice.workspace = Blockly.inject(blocklyDiv, {
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
    javascriptGenerator.INFINITE_LOOP_TRAP = null;
    javascriptGenerator.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    javascriptGenerator.addReservedWords('highlightBlock');
  }
}
