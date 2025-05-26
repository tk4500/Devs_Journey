import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameScreenComponent } from './game-screen.component';
import { BlocklyComponent } from '../blockly/blockly.component';



@NgModule({
  declarations: [
    GameScreenComponent
  ],
  imports: [
    CommonModule,
    BlocklyComponent
  ]
  , exports: [
    GameScreenComponent
  ]
})
export class GameScreenModule { }
