import { Component , inject, OnInit} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { GamescreenComponent } from "./gamescreen/gamescreen.component";
import { Toolbar } from 'primeng/toolbar';
import { PrimeNG } from 'primeng/config';
import { BlocklyService } from './blockly/blockly.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GamescreenComponent, Toolbar, Button],
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
