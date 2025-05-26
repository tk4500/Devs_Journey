import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameScreenModule } from './game-screen/game-screen.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
