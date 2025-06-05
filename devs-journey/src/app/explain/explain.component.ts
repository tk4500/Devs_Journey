import { CommonModule } from '@angular/common';
import { AfterViewInit, computed, Component, OnInit, effect, OnDestroy } from '@angular/core';
import { ExplainService } from './explain.service';
import { Panel } from 'primeng/panel';
import { Button } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explain',
  imports: [CommonModule, Panel, Button],
  templateUrl: './explain.component.html',
  styleUrl: './explain.component.css',
})
export class ExplainComponent implements OnDestroy{
  base: Explain = {
    isFoward: false,
    isBack: false,
    isExplanation: false,
    isHidden: true,
    explanation: '',
    sergioImage: 'SergioNeutro.png',
    isSergio: false,
    sergioX: 0,
    sergioY: 0,
    explanationX: 0,
    explanationY: 0,
  };
  levelExplain: Explain[] = [];
  currentPosition: number = 0;
  constructor(public service: ExplainService, private route: ActivatedRoute) {}
  private actionEffect = effect(()=> {
     const id = computed(() => this.service.id());
      if (id()) {
        this.startLevel(id());
      }
  });
  ngOnDestroy() {
    this.actionEffect.destroy();
  }

  startLevel(arg0: number) {
    console.log('Starting level:', arg0);
    this.service.getExplain(arg0).subscribe((data: Explain[]) => {
      this.levelExplain = data;
      if (this.levelExplain.length > 0) {
        this.base = this.levelExplain[0];
        this.base.isBack = false;
        this.base.isFoward = true;
        this.currentPosition = 0;
      } else {
        console.error('No explanations found for level:', arg0);
      }
    });
  }

  next() {
    if (this.levelExplain.length > 0) {
      this.currentPosition++;
      if (this.currentPosition >= this.levelExplain.length) {
        this.base = {
          isFoward: false,
          isBack: false,
          isExplanation: false,
          isHidden: true,
          explanation: '',
          sergioImage: 'SergioNeutro.png',
          isSergio: false,
          sergioX: 0,
          sergioY: 0,
          explanationX: 0,
          explanationY: 0,
        };
      }else{
        this.base = this.levelExplain[this.currentPosition];
      }
    }
  }
  back() {
      if (this.levelExplain.length > 0) {
      this.currentPosition--;
      this.base = this.levelExplain[this.currentPosition];
      if (this.currentPosition <= 0) {
        this.base.isBack = false;
      }
    }
  }
}
export interface Explain {
  isFoward: boolean;
  isBack: boolean;
  isExplanation: boolean;
  isHidden: boolean;
  explanation: string;
  sergioImage: string;
  isSergio: boolean;
  sergioX: number;
  sergioY: number;
  explanationX: number;
  explanationY: number;
}
