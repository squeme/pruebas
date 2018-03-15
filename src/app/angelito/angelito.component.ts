import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angelito',
  templateUrl: './angelito.component.html',
  styleUrls: ['./angelito.component.css']
})
export class AngelitoComponent implements OnInit {
  listaParticipantes = [];
  nombreParticipante = '';
  
  constructor() { }
  
  ngOnInit() {
    
  }
  
  ingresarNombre(){
    if (this.nombreParticipante != null && this.nombreParticipante != ''){
        // ingresa el nombre en la lista
        this.listaParticipantes.push(this.nombreParticipante);
        this.nombreParticipante = "";
    }
    // imprime lista vigente
    console.log(this.listaParticipantes);
  }

  hacerSorteo(){
    
  }
}
