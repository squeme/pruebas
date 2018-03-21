import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FlyersComponent } from './flyers/flyers.component';
import { TetosComponent } from './tetos/tetos.component';
import { AngelitoComponent } from './angelito/angelito.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TipoDeCambioComponent } from './tipo-de-cambio/tipo-de-cambio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FlyersComponent,
    TetosComponent,
    AngelitoComponent,
    CotizadorComponent,
    HeaderComponent,
    TipoDeCambioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
