import { Routes } from '@angular/router';
import { GamescreenComponent } from './gamescreen/gamescreen.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';

export const routes: Routes = [
  { path: 'gameroute/:id', component: GamescreenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainscreenComponent }
];
