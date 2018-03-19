import { Component, OnInit } from '@angular/core';
import { Salario } from '../models/salario';
import { isNumber } from 'util';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
  salarioFullstack: Salario;
  salarioDisenadorComercial: Salario;
  tipoDeCambio: number = 7.5;
  horaMes: number = 4*5*8;


  constructor() { }

  ngOnInit() {
    //Inicializando las variables
    this.salarioFullstack = new Salario();
    this.salarioFullstack.nombre = 'Fullstack developer';
    this.salarioFullstack.salarioQuetzales = 9000;

    this.salarioDisenadorComercial = new Salario();
    this.salarioDisenadorComercial.nombre = 'Diseñador comercial';
    this.salarioDisenadorComercial.salarioQuetzales = 5000;
  }
  
  calcularSalario (salario: Salario) {    
    salario.salarioDolares = salario.salarioQuetzales / this.tipoDeCambio;
    salario.salarioHoraQuetzales = salario.salarioQuetzales / this.horaMes;
    salario.salarioHoraDolares = salario.salarioDolares / this.horaMes;
  }

}
