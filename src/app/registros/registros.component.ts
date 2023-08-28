import { Component } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent {
  //funcao sono
  //declaração da variavel
  isSonoOpened:boolean = false;
  //criacao da funcao para o click, alternando entre true e false.
  clickSono(){
    this.isSonoOpened = !this.isSonoOpened;
  }
  //funcao alimentacao
  isAlimentacaoOpened:boolean = false;

  clickAlimentacao(){
    this.isAlimentacaoOpened = !this.isAlimentacaoOpened;
  }

  //funcao alimentacao
  isAtividadesOpened:boolean = false;

  clickAtividades(){
    this.isAtividadesOpened = !this.isAtividadesOpened;
  }

  //funcao saude 
  isSaudeOpened:boolean = false;

  clickSaude(){
    this.isSaudeOpened = !this.isSaudeOpened;
  }

  //funcao incidentes
  isIncidentesOpened:boolean = false;

  clickIncidentes(){
    this.isIncidentesOpened = !this.isIncidentesOpened;
  } 



}
