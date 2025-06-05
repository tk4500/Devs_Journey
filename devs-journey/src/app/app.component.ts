import { Component , inject, OnInit} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { PrimeNG } from 'primeng/config';
import { BlocklyService } from './blockly/blockly.service';
import { ExplainComponent } from './explain/explain.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, ExplainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  route = inject(ActivatedRoute);
      constructor(private primeng: PrimeNG, public blocklyservice: BlocklyService) {}
    ngOnInit() {
        this.primeng.ripple.set(true);
    }
  title = 'devs-journey';
}
