import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { GamescreenComponent } from "./gamescreen/gamescreen.component";
import { Toolbar } from 'primeng/toolbar';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GamescreenComponent, Toolbar, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
      constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
    }
  title = 'devs-journey';
}
