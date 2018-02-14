import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FlyersComponent } from './flyers/flyers.component';
import { TetosComponent } from './tetos/tetos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FlyersComponent,
    TetosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
