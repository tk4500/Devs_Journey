import { Component } from '@angular/core';
import { BlocklyComponent } from '../blockly/blockly.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { StatusComponent } from '../status/status.component';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { BlocklyService } from '../blockly/blockly.service';

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
export class GamescreenComponent implements OnInit {
  gameLevel: string | null = null;

  constructor(private route: ActivatedRoute, private blocklyService: BlocklyService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      this.blocklyService.updateLevel(params['id']);
    });
  }
}
