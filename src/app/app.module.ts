import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FlyersComponent } from './flyers/flyers.component';
import { TetosComponent } from './tetos/tetos.component';
import { AngelitoComponent } from './angelito/angelito.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FlyersComponent,
    TetosComponent,
    AngelitoComponent,
    CotizadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
