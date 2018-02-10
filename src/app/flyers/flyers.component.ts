import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flyers',
  templateUrl: './flyers.component.html',
  styleUrls: ['./flyers.component.css']
})
export class FlyersComponent implements OnInit {
    // Propiedades
    num1 = 123;
    num2 = 321;
    num1b = 222;
    constructor() { }

    ngOnInit() {
    }

    // Operación sumar datos
    sumaDatos(dato1, dato2) {
        return dato1 + dato2;
    }

    // Operación restar datos
    restaDatos(dato1, dato2) {
        return dato1 - dato2;
    }
}
