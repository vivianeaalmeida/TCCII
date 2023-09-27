import { Component } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent {

  selectStudent: string = '';
  selectDate: string = '';
  sleepValue: string = '';
  mealValue: string = '';
  activitiesValue: string = '';
  healthValue: string = '';
  incidentsValue: string = '';
  
  students: {id:string, name:string}[] = [{id: '123', name: 'Viviane'}, {id: '234', name: 'Marcelo'}]

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

  //salvar registros
  save(){
    console.log(this.selectStudent)
    console.log(this.selectDate)
    console.log(this.sleepValue)
    console.log(this.mealValue)
    console.log(this.activitiesValue)
    console.log(this.healthValue)
    console.log(this.incidentsValue)   
  }


}
