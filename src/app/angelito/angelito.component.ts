import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angelito',
  templateUrl: './angelito.component.html',
  styleUrls: ['./angelito.component.css']
})
export class AngelitoComponent implements OnInit {
  listaParticipantes = [];
  emparejamientos = [];
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
    let listaParticipantes2 = this.listaParticipantes.slice(0);
    this.emparejamientos = [];

    while (listaParticipantes2.length > 1) {
      var indexRandom1 = Math.floor(Math.random() * listaParticipantes2.length);
      var primerParticipante = listaParticipantes2[indexRandom1];
      listaParticipantes2.splice(indexRandom1, 1);

      var indexRandom2 = Math.floor(Math.random() * listaParticipantes2.length);
      var segundoParticipante = listaParticipantes2[indexRandom2];
      listaParticipantes2.splice(indexRandom2, 1);
      
      this.emparejamientos.push({primero: primerParticipante, segundo: segundoParticipante});
    }
    
    if(listaParticipantes2.length == 1){
      alert(listaParticipantes2 + " quedó solito el pobrecito");
    }
  }
}
