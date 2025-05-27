import { Component } from '@angular/core';
import { BlocklyComponent } from '../blockly/blockly.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-gamescreen',
  standalone: true,
  imports: [
    BlocklyComponent,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    StatusComponent,
  ],
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css'],
})
export class GamescreenComponent {}
