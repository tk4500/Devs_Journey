import * as Blockly from 'blockly/core';
import * as Function from './blockly.functions';
import {javascriptGenerator, Order} from 'blockly/javascript';

export function defineBlocks() {
  Blockly.Blocks['dev_task'] = {
    init: function() {
      this.appendDummyInput()
        .appendField('Codar')
        .appendField(new Blockly.FieldNumber(0), 'task_value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Fazer Task');
      this.setHelpUrl('');
      this.setColour(315);
    }
  };

  javascriptGenerator.forBlock['dev_task'] = function(block) {
    const number_task_value = block.getFieldValue('task_value');
    Function.fazerTask(number_task_value);
    const code = ``;
    return code;
  };

  Blockly.Blocks['dev_coffe'] = {
    init: function() {
      this.appendDummyInput()
        .appendField('Café ☕');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Tomar Café');
      this.setHelpUrl('');
      this.setColour(315);
    }
  };

  javascriptGenerator.forBlock['dev_coffe'] = function() {
    Function.tomarCafe();
    const code = ``;
    return code;
  };
}

export function runCode() {
  const code = javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
  eval(code);
}
