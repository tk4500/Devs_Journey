import { Routes } from '@angular/router';
import { GamescreenComponent } from './gamescreen/gamescreen.component';

export const routes: Routes = [
  { path: 'gameroute/:id', component: GamescreenComponent }
];
