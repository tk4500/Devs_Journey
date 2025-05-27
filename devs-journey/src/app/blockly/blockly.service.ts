import { Injectable } from '@angular/core';

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

}
