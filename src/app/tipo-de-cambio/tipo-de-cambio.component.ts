import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tipo-de-cambio',
  templateUrl: './tipo-de-cambio.component.html',
  styleUrls: ['./tipo-de-cambio.component.css']
})
export class TipoDeCambioComponent implements OnInit {
  @Input() tipoDeCambio: number;
  @Output() tipoDeCambioChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  actualizarTipoDeCambio(){
    this.tipoDeCambioChange.next(this.tipoDeCambio);
  }
}
