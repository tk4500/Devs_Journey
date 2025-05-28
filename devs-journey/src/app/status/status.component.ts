import { Component, computed, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { BlocklyService } from '../blockly/blockly.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-status',
  imports: [Button, CommonModule, ProgressBar, ToastModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
    imagem = computed(()=> this.blocklyservice.image());
    public blocklyservice = inject(BlocklyService);


  run() {
    this.blocklyservice.runCode();
  }
}
